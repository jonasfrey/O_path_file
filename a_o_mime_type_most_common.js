// goto https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
// and paste into developer console 
// var a_o_mime_type_most_common = []
// var a_o_tr = document.querySelectorAll("tr")
// var n_i = 0;
// while (n_i < a_o_tr.length) {
//     var o_tr = a_o_tr[n_i]
//     var a_o_td = o_tr.querySelectorAll('td')
//     if (a_o_td.length > 0) {

//         var s_file_extension = a_o_td[0].innerText
//         var s_kind_of_document = a_o_td[1].innerText
//         var s_mime_type = a_o_td[2].querySelector('code') ? .innerText
//         var s_mime_type_description = a_o_td[2].innerText
//         a_o_mime_type_most_common.push(
//             new O_mime_type(
//                 s_file_extension,
//                 s_kind_of_document,
//                 s_mime_type,
//                 s_mime_type_description
//             )
//         )
//     }
//     n_i += 1;
// }
// console.log(JSON.stringify(a_o_mime_type_most_common))


var a_o_mime_type_most_common = [{
    "s_file_extension": ".aac",
    "s_kind_of_document": "AAC audio",
    "s_mime_type": "audio/aac",
    "s_mime_type_description": "audio/aac"
}, {
    "s_file_extension": ".abw",
    "s_kind_of_document": "AbiWord document",
    "s_mime_type": "application/x-abiword",
    "s_mime_type_description": "application/x-abiword"
}, {
    "s_file_extension": ".arc",
    "s_kind_of_document": "Archive document (multiple files embedded)",
    "s_mime_type": "application/x-freearc",
    "s_mime_type_description": "application/x-freearc"
}, {
    "s_file_extension": ".avif",
    "s_kind_of_document": "AVIF image",
    "s_mime_type": "image/avif",
    "s_mime_type_description": "image/avif"
}, {
    "s_file_extension": ".avi",
    "s_kind_of_document": "AVI: Audio Video Interleave",
    "s_mime_type": "video/x-msvideo",
    "s_mime_type_description": "video/x-msvideo"
}, {
    "s_file_extension": ".azw",
    "s_kind_of_document": "Amazon Kindle eBook format",
    "s_mime_type": "application/vnd.amazon.ebook",
    "s_mime_type_description": "application/vnd.amazon.ebook"
}, {
    "s_file_extension": ".bin",
    "s_kind_of_document": "Any kind of binary data",
    "s_mime_type": "application/octet-stream",
    "s_mime_type_description": "application/octet-stream"
}, {
    "s_file_extension": ".bmp",
    "s_kind_of_document": "Windows OS/2 Bitmap Graphics",
    "s_mime_type": "image/bmp",
    "s_mime_type_description": "image/bmp"
}, {
    "s_file_extension": ".bz",
    "s_kind_of_document": "BZip archive",
    "s_mime_type": "application/x-bzip",
    "s_mime_type_description": "application/x-bzip"
}, {
    "s_file_extension": ".bz2",
    "s_kind_of_document": "BZip2 archive",
    "s_mime_type": "application/x-bzip2",
    "s_mime_type_description": "application/x-bzip2"
}, {
    "s_file_extension": ".cda",
    "s_kind_of_document": "CD audio",
    "s_mime_type": "application/x-cdf",
    "s_mime_type_description": "application/x-cdf"
}, {
    "s_file_extension": ".csh",
    "s_kind_of_document": "C-Shell script",
    "s_mime_type": "application/x-csh",
    "s_mime_type_description": "application/x-csh"
}, {
    "s_file_extension": ".css",
    "s_kind_of_document": "Cascading Style Sheets (CSS)",
    "s_mime_type": "text/css",
    "s_mime_type_description": "text/css"
}, {
    "s_file_extension": ".csv",
    "s_kind_of_document": "Comma-separated values (CSV)",
    "s_mime_type": "text/csv",
    "s_mime_type_description": "text/csv"
}, {
    "s_file_extension": ".doc",
    "s_kind_of_document": "Microsoft Word",
    "s_mime_type": "application/msword",
    "s_mime_type_description": "application/msword"
}, {
    "s_file_extension": ".docx",
    "s_kind_of_document": "Microsoft Word (OpenXML)",
    "s_mime_type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "s_mime_type_description": "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
}, {
    "s_file_extension": ".eot",
    "s_kind_of_document": "MS Embedded OpenType fonts",
    "s_mime_type": "application/vnd.ms-fontobject",
    "s_mime_type_description": "application/vnd.ms-fontobject"
}, {
    "s_file_extension": ".epub",
    "s_kind_of_document": "Electronic publication (EPUB)",
    "s_mime_type": "application/epub+zip",
    "s_mime_type_description": "application/epub+zip"
}, {
    "s_file_extension": ".gz",
    "s_kind_of_document": "GZip Compressed Archive",
    "s_mime_type": "application/gzip",
    "s_mime_type_description": "application/gzip"
}, {
    "s_file_extension": ".gif",
    "s_kind_of_document": "Graphics Interchange Format (GIF)",
    "s_mime_type": "image/gif",
    "s_mime_type_description": "image/gif"
}, {
    "s_file_extension": ".htm .html",
    "s_kind_of_document": "HyperText Markup Language (HTML)",
    "s_mime_type": "text/html",
    "s_mime_type_description": "text/html"
}, {
    "s_file_extension": ".ico",
    "s_kind_of_document": "Icon format",
    "s_mime_type": "image/vnd.microsoft.icon",
    "s_mime_type_description": "image/vnd.microsoft.icon"
}, {
    "s_file_extension": ".ics",
    "s_kind_of_document": "iCalendar format",
    "s_mime_type": "text/calendar",
    "s_mime_type_description": "text/calendar"
}, {
    "s_file_extension": ".jar",
    "s_kind_of_document": "Java Archive (JAR)",
    "s_mime_type": "application/java-archive",
    "s_mime_type_description": "application/java-archive"
}, {
    "s_file_extension": ".jpeg .jpg",
    "s_kind_of_document": "JPEG images",
    "s_mime_type": "image/jpeg",
    "s_mime_type_description": "image/jpeg"
}, {
    "s_file_extension": ".js",
    "s_kind_of_document": "JavaScript",
    "s_mime_type": "text/javascript",
    "s_mime_type_description": "text/javascript (Specifications: HTML and RFC 9239)"
}, {
    "s_file_extension": ".json",
    "s_kind_of_document": "JSON format",
    "s_mime_type": "application/json",
    "s_mime_type_description": "application/json"
}, {
    "s_file_extension": ".jsonld",
    "s_kind_of_document": "JSON-LD format",
    "s_mime_type": "application/ld+json",
    "s_mime_type_description": "application/ld+json"
}, {
    "s_file_extension": ".mid .midi",
    "s_kind_of_document": "Musical Instrument Digital Interface (MIDI)",
    "s_mime_type": "audio/midi",
    "s_mime_type_description": "audio/midi audio/x-midi"
}, {
    "s_file_extension": ".mjs",
    "s_kind_of_document": "JavaScript module",
    "s_mime_type": "text/javascript",
    "s_mime_type_description": "text/javascript"
}, {
    "s_file_extension": ".mp3",
    "s_kind_of_document": "MP3 audio",
    "s_mime_type": "audio/mpeg",
    "s_mime_type_description": "audio/mpeg"
}, {
    "s_file_extension": ".mp4",
    "s_kind_of_document": "MP4 video",
    "s_mime_type": "video/mp4",
    "s_mime_type_description": "video/mp4"
}, {
    "s_file_extension": ".mpeg",
    "s_kind_of_document": "MPEG Video",
    "s_mime_type": "video/mpeg",
    "s_mime_type_description": "video/mpeg"
}, {
    "s_file_extension": ".mpkg",
    "s_kind_of_document": "Apple Installer Package",
    "s_mime_type": "application/vnd.apple.installer+xml",
    "s_mime_type_description": "application/vnd.apple.installer+xml"
}, {
    "s_file_extension": ".odp",
    "s_kind_of_document": "OpenDocument presentation document",
    "s_mime_type": "application/vnd.oasis.opendocument.presentation",
    "s_mime_type_description": "application/vnd.oasis.opendocument.presentation"
}, {
    "s_file_extension": ".ods",
    "s_kind_of_document": "OpenDocument spreadsheet document",
    "s_mime_type": "application/vnd.oasis.opendocument.spreadsheet",
    "s_mime_type_description": "application/vnd.oasis.opendocument.spreadsheet"
}, {
    "s_file_extension": ".odt",
    "s_kind_of_document": "OpenDocument text document",
    "s_mime_type": "application/vnd.oasis.opendocument.text",
    "s_mime_type_description": "application/vnd.oasis.opendocument.text"
}, {
    "s_file_extension": ".oga",
    "s_kind_of_document": "OGG audio",
    "s_mime_type": "audio/ogg",
    "s_mime_type_description": "audio/ogg"
}, {
    "s_file_extension": ".ogv",
    "s_kind_of_document": "OGG video",
    "s_mime_type": "video/ogg",
    "s_mime_type_description": "video/ogg"
}, {
    "s_file_extension": ".ogx",
    "s_kind_of_document": "OGG",
    "s_mime_type": "application/ogg",
    "s_mime_type_description": "application/ogg"
}, {
    "s_file_extension": ".opus",
    "s_kind_of_document": "Opus audio",
    "s_mime_type": "audio/opus",
    "s_mime_type_description": "audio/opus"
}, {
    "s_file_extension": ".otf",
    "s_kind_of_document": "OpenType font",
    "s_mime_type": "font/otf",
    "s_mime_type_description": "font/otf"
}, {
    "s_file_extension": ".png",
    "s_kind_of_document": "Portable Network Graphics",
    "s_mime_type": "image/png",
    "s_mime_type_description": "image/png"
}, {
    "s_file_extension": ".pdf",
    "s_kind_of_document": "Adobe Portable Document Format (PDF)",
    "s_mime_type": "application/pdf",
    "s_mime_type_description": "application/pdf"
}, {
    "s_file_extension": ".php",
    "s_kind_of_document": "Hypertext Preprocessor (Personal Home Page)",
    "s_mime_type": "application/x-httpd-php",
    "s_mime_type_description": "application/x-httpd-php"
}, {
    "s_file_extension": ".ppt",
    "s_kind_of_document": "Microsoft PowerPoint",
    "s_mime_type": "application/vnd.ms-powerpoint",
    "s_mime_type_description": "application/vnd.ms-powerpoint"
}, {
    "s_file_extension": ".pptx",
    "s_kind_of_document": "Microsoft PowerPoint (OpenXML)",
    "s_mime_type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "s_mime_type_description": "application/vnd.openxmlformats-officedocument.presentationml.presentation"
}, {
    "s_file_extension": ".rar",
    "s_kind_of_document": "RAR archive",
    "s_mime_type": "application/vnd.rar",
    "s_mime_type_description": "application/vnd.rar"
}, {
    "s_file_extension": ".rtf",
    "s_kind_of_document": "Rich Text Format (RTF)",
    "s_mime_type": "application/rtf",
    "s_mime_type_description": "application/rtf"
}, {
    "s_file_extension": ".sh",
    "s_kind_of_document": "Bourne shell script",
    "s_mime_type": "application/x-sh",
    "s_mime_type_description": "application/x-sh"
}, {
    "s_file_extension": ".svg",
    "s_kind_of_document": "Scalable Vector Graphics (SVG)",
    "s_mime_type": "image/svg+xml",
    "s_mime_type_description": "image/svg+xml"
}, {
    "s_file_extension": ".swf",
    "s_kind_of_document": "Small web format (SWF) or Adobe Flash document",
    "s_mime_type": "application/x-shockwave-flash",
    "s_mime_type_description": "application/x-shockwave-flash"
}, {
    "s_file_extension": ".tar",
    "s_kind_of_document": "Tape Archive (TAR)",
    "s_mime_type": "application/x-tar",
    "s_mime_type_description": "application/x-tar"
}, {
    "s_file_extension": ".tif .tiff",
    "s_kind_of_document": "Tagged Image File Format (TIFF)",
    "s_mime_type": "image/tiff",
    "s_mime_type_description": "image/tiff"
}, {
    "s_file_extension": ".ts",
    "s_kind_of_document": "MPEG transport stream",
    "s_mime_type": "video/mp2t",
    "s_mime_type_description": "video/mp2t"
}, {
    "s_file_extension": ".ttf",
    "s_kind_of_document": "TrueType Font",
    "s_mime_type": "font/ttf",
    "s_mime_type_description": "font/ttf"
}, {
    "s_file_extension": ".txt",
    "s_kind_of_document": "Text, (generally ASCII or ISO 8859-n)",
    "s_mime_type": "text/plain",
    "s_mime_type_description": "text/plain"
}, {
    "s_file_extension": ".vsd",
    "s_kind_of_document": "Microsoft Visio",
    "s_mime_type": "application/vnd.visio",
    "s_mime_type_description": "application/vnd.visio"
}, {
    "s_file_extension": ".wav",
    "s_kind_of_document": "Waveform Audio Format",
    "s_mime_type": "audio/wav",
    "s_mime_type_description": "audio/wav"
}, {
    "s_file_extension": ".weba",
    "s_kind_of_document": "WEBM audio",
    "s_mime_type": "audio/webm",
    "s_mime_type_description": "audio/webm"
}, {
    "s_file_extension": ".webm",
    "s_kind_of_document": "WEBM video",
    "s_mime_type": "video/webm",
    "s_mime_type_description": "video/webm"
}, {
    "s_file_extension": ".webp",
    "s_kind_of_document": "WEBP image",
    "s_mime_type": "image/webp",
    "s_mime_type_description": "image/webp"
}, {
    "s_file_extension": ".woff",
    "s_kind_of_document": "Web Open Font Format (WOFF)",
    "s_mime_type": "font/woff",
    "s_mime_type_description": "font/woff"
}, {
    "s_file_extension": ".woff2",
    "s_kind_of_document": "Web Open Font Format (WOFF)",
    "s_mime_type": "font/woff2",
    "s_mime_type_description": "font/woff2"
}, {
    "s_file_extension": ".xhtml",
    "s_kind_of_document": "XHTML",
    "s_mime_type": "application/xhtml+xml",
    "s_mime_type_description": "application/xhtml+xml"
}, {
    "s_file_extension": ".xls",
    "s_kind_of_document": "Microsoft Excel",
    "s_mime_type": "application/vnd.ms-excel",
    "s_mime_type_description": "application/vnd.ms-excel"
}, {
    "s_file_extension": ".xlsx",
    "s_kind_of_document": "Microsoft Excel (OpenXML)",
    "s_mime_type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "s_mime_type_description": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
}, {
    "s_file_extension": ".xml",
    "s_kind_of_document": "XML",
    "s_mime_type": "application/xml",
    "s_mime_type_description": "application/xml is recommended as of RFC 7303 (section 4.1), but text/xml is still used sometimes. You can assign a specific MIME type to a file with .xml extension depending on how its contents are meant to be interpreted. For instance, an Atom feed is application/atom+xml, but application/xml serves as a valid default."
}, {
    "s_file_extension": ".xul",
    "s_kind_of_document": "XUL",
    "s_mime_type": "application/vnd.mozilla.xul+xml",
    "s_mime_type_description": "application/vnd.mozilla.xul+xml"
}, {
    "s_file_extension": ".zip",
    "s_kind_of_document": "ZIP archive",
    "s_mime_type": "application/zip",
    "s_mime_type_description": "application/zip"
}, {
    "s_file_extension": ".3gp",
    "s_kind_of_document": "3GPP audio/video container",
    "s_mime_type": "video/3gpp",
    "s_mime_type_description": "video/3gpp; audio/3gpp if it doesn't contain video"
}, {
    "s_file_extension": ".3g2",
    "s_kind_of_document": "3GPP2 audio/video container",
    "s_mime_type": "video/3gpp2",
    "s_mime_type_description": "video/3gpp2; audio/3gpp2 if it doesn't contain video"
}, {
    "s_file_extension": ".7z",
    "s_kind_of_document": "7-zip archive",
    "s_mime_type": "application/x-7z-compressed",
    "s_mime_type_description": "application/x-7z-compressed"
}]

export {a_o_mime_type_most_common}