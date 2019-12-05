# Array.prototype.forEachN()

Pass all array members to a callback function, _n_ members at a time.

## Syntax

```JavaScript
arr.forEachN(n, callback(...args)[, thisArg])
```

### Parameters

**n**\
Number of elements to pass to _callback_ at a time.

**callback**\
Function to call.

**thisArg**\
A value to bind `this` to. If not set, `this` refers to the Array instance.

### Returns

`undefined`.

## Example

```JavaScript
[1,2,3,4].forEachN(2, (arr) => console.log(arr));
// [ 1, 2 ]
// [ 3, 4 ]
```
