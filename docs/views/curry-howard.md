
# Curry–Howard Correspondence

## Miscella

- Propositions as Types ([Philip Wadler's Paper](https://homepages.inf.ed.ac.uk/wadler/papers/propositions-as-types/propositions-as-types.pdf))
  1. **propositions as types**. for each proposition in the logic there is a corresponding type in the programming language — and vice versa. 
  2. **proofs as programs**. for each proof of a given proposition, there is a program (aka. expression) of the corresponding type — and vice versa. 
  3. **simplification of proofs as evaluation of programs**. for each way to simplify a proof there is a corresponding way to evaluate a program (aka. reduction of expression) — and vice versa. 

- Howard’s observation
```
      A × B          ≅      A ∧ B
Cartesian product         Conjunction

      A + B          ≅         A ∨ B
  Disjoint sum               Disjunction

     A ⊃ B           ≅            A → B
  Implication                  function space

```

- Type
```
A → B → A × B    ≅    A ⇒ B ⇒ A ∧ B
```


- Dependent Types: types which are a “function” of the elements of some other type.

- Links 
  - [nLab - relation between type theory and category theory](https://ncatlab.org/nlab/show/relation+between+type+theory+and+category+theory)


## Elements


## Analogy


## Inter-universal Teichmüller



