function textClipper(txt, num) {
    if (txt.length > num) {
        return txt.substring(1, num) + '...'
    } else {
        return txt
    }
}

fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(response => response.json())
    .then((json) => {

        json.slice(0, 10).forEach((post, i) => {
            const index = i + 1;


            $('.simplebar-content').append(
                $('<li/>')
                    .append(`<span style="background-image: url(https://loremflickr.com/300/300?random=${i})"></span>`)
                    .append(
                        $('<div/>')
                            .append(`<h3 class="blue-text med-text">${textClipper(post.title, 50)}</h3>`)
                            .append(`<p class="small-text">${textClipper(post.body, 125)}</p>`)
                    )
            )
        });
    })