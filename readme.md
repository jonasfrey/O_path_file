# also checkout the test.js
```javascript

var o_path_file = new O_path_file('/tmp')
console.log(o_path_file.s_file_name) // tmp

var o_path_file = new O_path_file('/test.txt')
console.log(o_path_file.s_file_name) // test.txt
console.log(o_path_file.s_file_extension) // txt
console.log(o_path_file.o_mime_type_guessed_by_file_extension.s_mime_type) // text/plain


var o_path_file = new O_path_file('./this/is/a/path/')
console.log(o_path_file.s_file_name) // null
console.log(o_path_file.s_file_extension) // null
console.log(o_path_file.s_path_name) // './this/is/a/path/ 
console.log(o_path_file.o_mime_type_guessed_by_file_extension.s_mime_type) // text/plain

var o_path_file = new O_path_file('./a/b/c/../../2/')
console.log(o_path_file.s_path_name) // ./a/b/c/../../2/
console.log(o_path_file.s_path_name_without_singleanddoubledots) // /a/2/

```
