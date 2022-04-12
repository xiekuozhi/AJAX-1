let n =1


getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/style.css");
    request.onreadystatechange = () => {
        //一个请求如果等于4说明加载完了，但不确定加载的是否成功
        if (request.readyState === 4) {
            //这个（request.status）状态码添加一个区间值则读取成功就操作                                         
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            } else {
                alert('加载css失败')
            }
        }
    };
    request.send();
};

getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/2.js')
    request.onload = () => {
        const script = document.createElement('script')  /*创建script标签*/
        script.innerHTML = request.response               /*填写script内容*/
        document.body.appendChild(script)               /*插到身体里*/
    }
    request.onerror = () => { }
    request.send();
};
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/3.html')
    request.onload = () => {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => { }
    request.send();
};

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            //这个（request.status）状态码添加一个区间值则读取成功就操作                                         
            if (request.status >= 200 && request.status < 300) {
                const dom = request.responseXML;
                const text =dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }
        };
    }
    request.send();
};

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const object = JSON.parse(request.response)
            myName.textContent = object.name

        }
    }
    request.send();
};

getPage.onclick=()=>{
    const request=new XMLHttpRequest()
    request.open('GET',`/page${n + 1}`)
    request.onreadystatechange=()=>{
        if(request.readyState===4 && request.status===200){
            const array=JSON.parse(request.response)
            array.forEach(item => {
                const li =document.createElement('li')
                li.textContent=item.id
                xxx.appendChild(li);
            });
            n+=1
        }
        
    }

    request.send();
}
