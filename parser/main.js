function  main()
{
 var      win;

 mlj_init("Parser");
 win = mlj_new_window(600, 600, "black");
 mlj_upload_button(parsing, win);
}

function  parsing(file_content, win)
{
 console.log(file_content);
 return (0);
}
