$(document).ready(function(){
    // 1. initial
    $('.button').eq(0).addClass('active')

    // 2. bind Event
    $('.button').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
        index = $(this).index()
        $('.slides').css('transform',`translateX(${-index*920}px)`)
    })

    // 3. automation
    n = $('.button.active').index()
    var timer = setInterval(function(){
        n += 1
        console.log(n)
        if(n === 4){
            n = 0
        }
        $('.button').eq(n).addClass('active').siblings().removeClass('active')
        $('.slides').css('transform',`translateX(${-n*920}px)`)
    },2000)

    $('.buttonWrapper').mouseover(function(){
        clearInterval(timer)
    })

    $('.buttonWrapper').mouseleave(function(){
        console.log('leace')

        n = $('.button.active').index()
        timer = setInterval(function(){
            n += 1
            console.log(n)
            if(n === 4){
                n = 0
            }
            $('.button').eq(n).addClass('active').siblings().removeClass('active')
            $('.slides').css('transform',`translateX(${-n*920}px)`)
        },2000)
    })
})


