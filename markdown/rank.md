# Double argsort trick

If you search "rank numbers using numpy", you will find [various resources](https://stackoverflow.com/questions/5284646/rank-items-in-an-array-using-python-numpy-without-sorting-array-twice/) offering a mysterious solution:

```python
def rank(array):
    return array.argsort().argsort()
```

Yes, that is it, and it works. But, why? As I could not find an answer to that, I will try to bring some clarity here.

Before we start, what is __ranking__? For the ascending case, ranking is assigning values to numbers such that each value denotes the index of its corresponding number in a would-be sorted list. For example, we want `rank([1, 2, 0, 3])` to return `[1, 2, 0, 3]`. In other words, we want the _order_ of each number.

## Example

Quoting [`numpy.argsort` documentation]((https://docs.scipy.org/doc/numpy/reference/generated/numpy.argsort.html)), "[argsort] Returns the indices that would sort an array.". For simplicity, let us assume that our array does not have duplicates. 

```python
>>> import numpy as np
>>> nums = np.array([3, 5, 0, 10])
>>> nums.argsort()
array([2, 0, 1, 3])
>>> nums.argsort().argsort()
array([1, 2, 0, 3])
```

The final result indeed corresponds to rank of each number.

## Proof

Let $as := nums.argsort()$ and $2as := as.argsort()$. 

__1)__ Define $idx(i, array)$ to be the index of $i$ in $array$ e.g. $idx(2, [0, 2, 1]) = 1$. 

__2)__ From the definition of `argsort`, we know that $\forall i, j \in as,\ idx(i, as) > idx(j, as) \Rightarrow nums[i] > nums[j]$.

$\forall i,\ j \in 2as, i > j \Rightarrow 2as[idx(i,\ 2as)] > 2as[idx(j,\ 2as)]$ - follows from (__1__)

$\Rightarrow idx(idx(i,\ 2as),\ as) > idx(idx(j,\ 2as),\ as)$ - see the lemma below

$\Rightarrow nums[idx(i,\ 2as)] > nums[idx(j,\ 2as)]$ - follows from (__2__)

What this tells us is higher value in $2as$ implies higher value for the corresponding number when $nums$ is indexed into. Combining this with the fact that `argsort` outputs are a permutation of numbers from 0 to length of the array - 1, we conclude the proof.

### Lemma

This is the crux of the proof. Let's consider the example above but this time make the indices more explicit.

```
nums -> (0, 3), (1, 5), (2, 0), (3, 10)
as   -> (0, 2), (1, 0), (2, 1), (3, 3)
2as  -> (0, 1), (1, 2), (2, 0), (3, 3)
```

Notice how the indices and values of $as$ seem to swap as they map to $2as$. For instance, (0, 2) in $as$ is now (2, 0) in $2as$, while the (index) value in $2as$ is pointing at the original value in $as$.

**Prove:** $A.argsort()[i] = idx(i, A)$ when $A = permutation(\{0, ..., len(A) - 1\})$. In other words, each value in the argsorted list corresponds to the index of the same value in the original list.

Given $i \in A$, we know that there are exactly $i$ other numbers smaller than $i$ in $A$. Then by definition of `argsort`, `A.argsort()[i]` holds the index of $i$ i.e. $idx(i, A).

## Final remarks

While this is an interesting way to rank numbers, there are [more efficient ways](https://stackoverflow.com/a/5284703/3712254) that sort once instead of twice (with additional linear time processing).