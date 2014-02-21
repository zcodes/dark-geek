#### About ####

一个jekyll的主题，效果参见 http://zcodes.net


#### 多说配置 ####


```css
#ds-thread #ds-reset.ds-no-opacity li.ds-post { border-top: 1px solid #48493e; }
#ds-thread #ds-reset.ds-no-opacity .ds-comments,
#ds-thread #ds-reset.ds-no-opacity .ds-paginator { border-bottom: 1px solid #48493e; }
#ds-reset .ds-avatar {
    box-shadow: 0 0 0 #111;
    background: #111;
}
#ds-reset .ds-avatar img{
    width:54px;height:54px;
    border-radius: 27px;
    -webkit-border-radius: 27px;
    -moz-border-radius:27px;
    box-shadow: inset 0  0 0 #111;
    -webkit-box-shadow: inset 0  0 0 #111;
    -webkit-transition: 0.4s;
    -webkit-transition: -webkit-transform 0.4s ease-out;
    transition: transform 0.4s ease-out;
    -moz-transition: -moz-transform 0.4s ease-out;
}

#ds-reset .ds-avatar img:hover{
    box-shadow: 0 0 10px #111 rgba(1,1,1,.6), inset 0 0 20px rgba(1,1,1,1);
    -webkit-box-shadow: 0 0 10px #111 rgba(1,1,1,.6), inset 0 0 20px rgba(1,1,1,1);
    transform: rotateZ(360deg);
    -webkit-transform: rotateZ(360deg);
    -moz-transform: rotateZ(360deg);
}

#ds-thread #ds-reset .ds-textarea-wrapper textarea {
    color: #66D9EF !important;
    background: #111;
}
#ds-thread #ds-reset .ds-textarea-wrapper {
    border: 1px solid #49483e;
    background: #111;
}
#ds-reset .ds-gradient-bg {
    background: #111;
}
#ds-thread #ds-reset .ds-post-button {
    border: 1px solid #49483e !important;
    background: #222;
    color: #66d9ef !important;
    box-shadow: none !important;
    text-shadow: none !important;
}

#ds-thread #ds-reset .ds-post-options {
    border: 1px solid #49483e !important;
}

#ds-reset form {
    border: 1px solid #49483e;
}
#ds-thread #ds-reset .ds-post-toolbar {
    box-shadow: 0 1px 0 #484c3e;
}

```


#### 分类添加 ####

由于github不支持插件，此处使用一个笨办法，若新建分类，在categories目录
下将jekyll.html拷贝一份，然后修改一下name。

```sh
cp jekyll.html emacs.html #新建Emacs分类

```

修改emacs.html

```yaml
---
layout: default
name: emacs
---
```
