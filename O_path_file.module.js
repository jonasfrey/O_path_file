import { a_o_mime_type_most_common } from "./a_o_mime_type_most_common.js"

class O_path_file{

    constructor(
        s
    ){
        this._s = s
        this.s_path_name = null
        this.s_file_name = null
        this.s_dir_separator = null
        this.s_windows_drive_letter = null
        this.s_file_extension = null
        this.s_file_extension_separator = '.'
        this.s_path_name_without_singleanddoubledots = ''
        this.o_mime_type_guessed_by_file_extension = null
        this.f_update_all()
        //official mime/content types
        // https://www.iana.org/assignments/media-types/application.csv
        // https://www.iana.org/assignments/media-types/media-types.xhtml
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types

    }
    get s(){
        return this._s
    }
    set s(value){
        this._s = value
        this.f_update_all()
    }

    f_update_all(){

        // detect separator 
        this.s_dir_separator = '/'
        var a_s = Array.from(this.s)
        var n_count_backslash = a_s.filter(s=>s=='\\').length
        var n_count_slash = a_s.filter(s=>s=='/').length 
        if(n_count_backslash > n_count_slash){
            this.s_dir_separator = '\\'
        }

        // C:\dir\us\asdf.adfs
        // /home/user/code/asdf.adsf

        var a_s_part = this.s.split(this.s_dir_separator)
        var b_is_file = true
        if(this.s[this.s.length-1] == this.s_dir_separator){
            console.warn(`${this.s} is not a locator to a file but only to a path because it ends with a dir separator (${this.s_dir_separator})`)
            b_is_file = false
        }
        var s_file_name = a_s_part[a_s_part.length-1]
        if(s_file_name == ".." || s_file_name == ".."){
            console.warn(`${this.s} is not a locator to a file but only to a path because it ends with one or two dots (${s_file_name})`)
            b_is_file = false
        }

        if(b_is_file){
                
            this.s_file_name = a_s_part.pop()
            if(this.s_file_name.includes(this.s_file_extension_separator)){
                this.s_file_extension = this.s_file_name.split(this.s_file_extension_separator).pop()
                
                this.o_mime_type_guessed_by_file_extension = a_o_mime_type_most_common.filter(
                    o => o.s_file_extension == `.${this.s_file_extension}`
                    )[0]
                    // console.log(this.o_mime_type_guessed_by_file_extension)
                }
        }

        if(this.s_dir_separator == '\\'){
            if(a_s_part[0].includes(':')){
                this.s_windows_drive_letter = a_s_part.shift()
            }
        }
        
        // /1/a/../b/../c/lol/.. -> /1/c/
        // /.././../a/b/c/ -> /../../a/b/c/
        var a_s_path_part = []
        
        for(var s_part of a_s_part){
            if(s_part == '.'){
                continue
            }
            if(s_part == ".."){
                if( a_s_path_part.length > 0){
                    if(
                        a_s_path_part[a_s_path_part.length-1] == '..' || 
                        a_s_path_part[a_s_path_part.length-1] == '' 
                    ){
                        a_s_path_part.push(s_part)
                    }else{

                        a_s_path_part.pop()
                    }
                }
                continue
            }
            a_s_path_part.push(s_part)

        }
        this.s_path_name_without_singleanddoubledots = a_s_path_part.join(this.s_dir_separator)

        this.s_path_name = a_s_part.join(this.s_dir_separator)
    }

}

export {O_path_file}