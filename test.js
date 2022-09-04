import { O_path_file } from "./O_path_file.module.js";

import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";


// // var o_path_file = new O_path_file('test.html')
// // console.log(o_path_file) // ./a/b/c/../../2/
// // console.log(o_path_file.s_path_name_without_singleanddoubledots) // /a/2/


// // var a_s_pathfile = [
// //     '/tmp', 
// //     './.git/branches/', 
// //     './O_pathfile.module.js', 
// //     'C:\\a\\bb\\c.test',
// //     './test.html', 
// //     './t/a/s/ssdf.sdf.sdf/asdf-fds/fads:adsf/.././../../././././..', 
// //     './.', 
// //     './..',
// //     'lol.txt', 
// //     '/1/a/../b/../c/lol/..', 
// //     '/.././../a/b/c/'
// // ]

// // for(var s_pathfile of a_s_pathfile){
// //     var o_url = new O_path_file(s_pathfile)
// //     console.log(JSON.stringify(o_url, null, 4))
// // }




// // var o_path_file = new O_path_file('/tmp')
// // console.log(o_path_file.s_file_name) // tmp

// // var o_path_file = new O_path_file('/test.txt')
// // console.log(o_path_file.s_file_name) // test.txt
// // console.log(o_path_file.s_file_extension) // txt
// // console.log(o_path_file.o_mime_type_guessed_by_file_extension.s_mime_type) // text/plain


// // var o_path_file = new O_path_file('./this/is/a/path/')
// // console.log(o_path_file.s_file_name) // null
// // console.log(o_path_file.s_file_extension) // null
// // console.log(o_path_file.s_path_name) // './this/is/a/path/ 
// // console.log(o_path_file.o_mime_type_guessed_by_file_extension) // undefined

// // var o_path_file = new O_path_file('./a/b/c/../../2/')
// // console.log(o_path_file.s_path_name) // ./a/b/c/../../2/
// // console.log(o_path_file.s_path_name_without_singleanddoubledots) // /a/2/


// run file with 
// $ deno test test.js



Deno.test(
    "no leading slash",
    () => {
        var o_path_file = new O_path_file("dir/subdir/file")
        assertEquals(o_path_file.s_path_name, "dir/subdir");
        assertEquals(o_path_file.s_file_name, "file");
    }
);

Deno.test(
    "no leading dot but slash",
    () => {
        var o_path_file = new O_path_file("/dir/subdir/file")
        assertEquals(o_path_file.s_path_name, "/dir/subdir");
        assertEquals(o_path_file.s_file_name, "file");
    }
);
Deno.test(
    "leading dot and slash",
    () => {
        var o_path_file = new O_path_file("./../dir/subdir/file")
        assertEquals(o_path_file.s_path_name, "./../dir/subdir");
        assertEquals(o_path_file.s_file_name, "file");
    }
);

Deno.test(
    "two leading dots",
    () => {
        var o_path_file = new O_path_file("../dir/subdir/file")
        assertEquals(o_path_file.s_path_name, "../dir/subdir");
        assertEquals(o_path_file.s_file_name, "file");
    }
);

Deno.test(
    "ending slash",
    () => {
        var o_path_file = new O_path_file("../dir/subdir/")
        assertEquals(o_path_file.s_path_name, "../dir/subdir/");
        assertEquals(o_path_file.s_file_name, null);
    }
);

Deno.test(
    "path and file with special chars",
    () => {
        var o_path_file = new O_path_file("./A;:,.m!@#$%^&*()\"'14!@#$/A;:,.m!@#$%^&*()\"'14!@#$")
        assertEquals(o_path_file.s_path_name, "./A;:,.m!@#$%^&*()\"'14!@#$");
        assertEquals(o_path_file.s_file_name, "A;:,.m!@#$%^&*()\"'14!@#$");
    }
);

Deno.test(
    "testing path resolution",
    () => {
        var o_path_file = new O_path_file("./a/b/c/d/e./f../g.../../../../../")
        assertEquals(o_path_file.s_path_name_without_singleanddoubledots, "a/b/c");
    }
);


Deno.test(
    "testing path resolution with leading double dots",
    () => {
        var o_path_file = new O_path_file("/../../../././././a/b/c/d/../")
        console.log(o_path_file.s_path_name_without_singleanddoubledots)
        assertEquals(o_path_file.s_path_name_without_singleanddoubledots, "../../../a/b/c");
    }
);


// Deno.test(
//     "testing path resolution with leading double dots",
//     () => {
//         var o_path_file = new O_path_file("./../../../././././a/b/c/d/../")
//         console.log(o_path_file.s_path_name_without_singleanddoubledots)
//         assertEquals(o_path_file.s_path_name_without_singleanddoubledots, "../../../a/b/c/");
//     }
// );
