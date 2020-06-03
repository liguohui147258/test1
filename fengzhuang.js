
function chuan(url,posts,par,roolback){
        var request = new XMLHttpRequest();
        request.open(posts,'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/'+url);
        request.setRequestHeader("content-type","application/x-www-form-urlencoded");
        request.send(par);
        request.onreadystatechange=function () {
            if(request.readyState==4&&request.status==200)
            {
                var requestData=JSON.parse(request.responseText);
                var str=requestData.data;
                alert("1111");
            }
        roolback(str);
        }

}
