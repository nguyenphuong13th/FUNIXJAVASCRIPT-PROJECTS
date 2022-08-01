$('.loader-fame').css('display','block');// add loader icon to website
var PostApi = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f745ce908ed042eb8e18e252791cf378';
fetch(PostApi) //return a promise;
    .then(function (response) {
        $('.loader-fame').css('display','none');// remove loader after fetching have done
        return response.json(); // return another promise ,JSON.parse JSON =>javasript object
    })
    .then(function (data) { //data is a object javasript cause use JSON.parse
        $(document).ready(function(){
            // loop through all articles key and value then render them to html
            let htmls = data.articles.map(function(articles){
                return`
                <div class='content-top-news d-md-flex d-lg-flex d-xl-flex py-3 my-sm-2'>
                    <div class='content-top-news-image col-sm-12 col-md-3 col-lg-3'>
                        <img src=${articles.urlToImage} class='img-fluid' alt='newsimage'>
                    </div>
                    <div class='content-top-news-title-description col-sm-12 col-md-7 col-lg-9'>
                        <ul class='content-top-news-list ms-md-2 ms-lg-2'>
                            <li class='content-top-news-items'><a target='_blank' href=${articles.url}<p class='content-top-news-title h3'>${articles.title}</p></a></li>
                            <li class='content-top-news-items'><p class='content-top1-news-description h6 text-break'>${articles.description}</p></li>
                        </ul>
                    </div>
                </div>`
            })
            let html = htmls.join('')
            $('#content-section').html(html)
        })
    })
    .catch(function(){ // when fetch API failed
        $('.loader-fame').css('display','none');// remove loader after fetching have done
        $('.wrapper').html('<div class = Error><p class = errorMessage h2 text-center> Fail to Get DaTa from Server</p></div>')
    })
$('#button-addon2').click(()=>{
    $('.loader-fame').css('display','block');// add loader to website
    $('.wrapper').css('display','none');//hide web page
    let query = document.getElementById('header-searchTitlearea').value; // get input from user
    let publicYearFrom = String(document.getElementById('header-searchTitleFrom').value);
    let publicYearTo = String(document.getElementById('header-searchTitleTo').value);
    // find API with that input
    const url = `https://newsapi.org/v2/everything?q=${query}&from=${publicYearFrom}&to=${publicYearTo}&sortBy=popularity&apiKey=f745ce908ed042eb8e18e252791cf378`;//filter news by day
    fetch(url)
    .then(function(response){
        $('.loader-fame').css('display','none');//remove loader after fetching have done
        $('.wrapper').css('display','block');// show webpage
        return response.json(); // javascript object which contain items from user input value
    })
    .then(function(data){
        $(document).ready(function(){
                let htmls = data.articles.map(function(articles){
                    let articlesPublic = articles.publishedAt;
                    if(articlesPublic.includes(publicYearFrom)||articlesPublic.includes(publicYearTo)){ //filter the publics year of the news
                        return`
                        <div class='content-top-news d-lg-flex py-3'>
                            <div class='content-top-news-image col-sm-12 col-md-6 col-lg-2'>
                                <img src=${articles.urlToImage} class='img-fluid' alt='Newsimage'>
                            </div>
                            <div class='content-top-news-title-description col-sm-12 col-md-6 col-lg-9'>
                                <ul class='content-top-news-list ms-2'>
                                    <li class='content-top-news-items'><a target='_blank' href=${articles.url}<p class='content-top-news-title h3'>${articles.title}</p></a></li>
                                    <li class='content-top-news-items'><p class='content-top1-news-description h5'>${articles.description}</p></li>
                                    <li class='content-top-news-items'><p class='content-top1-news-description h6 text-secodary'>${articles.publishedAt}</p></li>
                                </ul>
                            </div>
                        </div>`
                    }else{
                        return `<div class = Error><p class = errorMessage h2 text-center>No More Result Found</p></div>`
                    }
                })
                let html = htmls.join('')
                $('#content-section').html(html) ;
        });
    })
    .catch(function(){ //when fetch API failed
        $('.loader-fame').css('display','none');// remove loader after fetching have done
        $('.wrapper').html('<div class = Error><p class = errorMessage h2 text-center> Fail to Get DaTa from Server</p></div>')
    })
});