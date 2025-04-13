// Execution Context in JavaScript
// Execution Context is an abstract concept that holds information about the environment within which JavaScript code is executed. It contains the scope, variables, and functions that are accessible at any given point in the code.
// There are three types of execution contexts in JavaScript:   
// 1. Global Execution Context: This is the default context in which JavaScript code runs. It is created when the script is loaded and contains global variables and functions.
// 2. Function Execution Context: This context is created whenever a function is invoked. It contains the function's arguments, local variables, and the scope chain.   
// 3. Eval Execution Context: This context is created when the eval() function is called. It allows JavaScript code to be executed in a string format, creating a new execution context for that code.
// The execution context is created in two phases:  
// 1. Creation Phase: In this phase, the JavaScript engine creates the execution context and sets up the scope chain, hoisting variables and functions.
// 2. Activation Phase: In this phase, the code is executed line by line, and the variables and functions are assigned their values.
// The execution context is managed by the JavaScript engine using a stack called the "Execution Context Stack" (or "Call Stack"). When a function is invoked, a new execution context is created and pushed onto the stack. When the function completes, its execution context is popped off the stack, and control returns to the previous context.
// The execution context is crucial for understanding how JavaScript handles variable scope, closures, and the "this" keyword. It allows JavaScript to manage the execution of code in a structured manner, ensuring that variables and functions are accessible only within their defined contexts.
