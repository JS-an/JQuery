$(document).ready(function () {
    const dataimg = {
        data: [{
            'src': './images/t0188cac2518c528df7.jpg'
        }, {
            'src': './images/t01892dd03bd310fe4d.jpg'
        }, {
            'src': './images/t018cd4a8b1133d1f32.jpg'
        }, {
            'src': './images/t018d43447ef0534dda.jpg'
        }, {
            'src': './images/t018d4d30237bcd3fec.jpg'
        }, {
            'src': './images/t01a82c3c902b030efe.jpg'
        }, {
            'src': './images/t01aa4fdb008dfc6175.jpg'
        }, {
            'src': './images/t01adb69ba965854e80.jpg'
        }, {
            'src': './images/t01b054bd3d019c5771.jpg'
        }, {
            'src': './images/t01c77c746b5c9937c0.jpg'
        }, {
            'src': './images/t01cabe38ab73a8caea.jpg'
        }, {
            'src': './images/t01d96617ceb08481a7.jpg'
        }, {
            'src': './images/t01eb12b9ae7fb8bc73.jpg'
        }, {
            'src': './images/t01ed7deb8fc9db5f8a.jpg'
        }, {
            'src': './images/t01f330134d9a9eddaa.jpg'
        }, {
            'src': './images/t01fad1e131f771f048.jpg'
        }]
    }
    //第一次执行函数
    imgposition()
    //改变浏览器大小重新定义瀑布流
    $(window).resize(function () {
        imgposition()
    })
    //卷动滚轴加载图片
    $(window).scroll(function () {
        if (loadok()) {
            $.each(dataimg.data, function (key, value) {
                let $newli = $('<li>').appendTo($('.box')),
                    $newa = $('<a>').appendTo($($newli)),
                    $newdiv = $('<div>').appendTo($($newli))
                $('<img>').attr('src', $(value).attr('src')).appendTo($newa)
            })
        }
        imgposition()
    })
    //定位图片位置
    function imgposition() {
        let $lis = $('.box>li'),
            liw = $lis.eq(0).width(),
            cols = Math.floor($(window).width() / liw), //列数
            harr = []
        $('.box').width(liw * cols) //容器的宽度
        $lis.each(function (index, value) {
            let $lisin = $lis.eq(index) //循环中每个li元素
            if (index < cols) {
                harr.push($lisin.height())
                $lisin.css({
                    'top': '0px',
                    'left': liw * index + 'px'
                }) //每行中的位置
            } else {
                let minh = Math.min.apply(null, harr), //harr中的最小值
                    minhindex = $.inArray(minh, harr) //最小值在harr中的索引
                $lisin.css({
                    'top': minh + 'px',
                    'left': minhindex * liw + 'px'
                })
                harr.splice(minhindex, 1, $lisin.height() + minh) //替换最小值的数据
            }
        })
        $('.box').height(Math.max.apply(null, harr)) //容器的高度
    }
    //判断是否加载
    function loadok() {
        let $doch = $(document).height(),
            $scrollh = $(window).scrollTop() + $(window).height()
        if ($doch - 300 > $scrollh) {
            return false
        } else {
            return true
        }
    }
})