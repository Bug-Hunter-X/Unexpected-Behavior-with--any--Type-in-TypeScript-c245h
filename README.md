# Unexpected Behavior with 'any' Type in TypeScript

This code demonstrates a common pitfall in TypeScript: using the 'any' type. While offering flexibility, 'any' circumvents type checking, potentially leading to unexpected runtime errors. 

The `concatenate` function, accepting 'any' types, performs string concatenation irrespective of input type. This is counterintuitive for numerical operations and might produce misleading results.  The example highlights how this function behaves with strings, numbers, and booleans. The goal is to show that relying too heavily on 'any' can significantly compromise type safety in TypeScript applications.  The solution demonstrates safer alternatives.