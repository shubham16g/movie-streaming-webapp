const BASE_URL_SEP = '/web_apps/123API/'

function requestAPI(loc, { post, get }, successCallback, errorCallback) {
    console.log(window.location.origin + BASE_URL_SEP + loc, get);
    setTimeout(()=>{
        successCallback({
            "pages": 4,
            "documents": [
              {
                "uri": "ZpZXMvcG9ubmayje52546VsdmFuLXBhcnQtaS1mdWxsLW1vdmllLWRvd25sb2FkLWZyZWUtaGluZGktZHViYmVkLWhkLw==MjAyMi1tb3",
                "name": "Big Buck Bunny",
                "year": "2008",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/424px-Big_buck_bunny_poster_big.jpg?20080321154201"
              },
              {
                "uri": "ZpZXMvcG9ubmayje52546VsdmFuLXBhcnQtaS1mdWxsLW1vdmllLWRvd25sb2FkLWZyZWUtaGluZGktZHViYmVkLWhkLw==MjAyMi1tb3",
                "name": "Big Buck Bunny",
                "year": "2008",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/424px-Big_buck_bunny_poster_big.jpg?20080321154201"
              },
              {
                "uri": "ZpZXMvcG9ubmayje52546VsdmFuLXBhcnQtaS1mdWxsLW1vdmllLWRvd25sb2FkLWZyZWUtaGluZGktZHViYmVkLWhkLw==MjAyMi1tb3",
                "name": "Big Buck Bunny",
                "year": "2008",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/424px-Big_buck_bunny_poster_big.jpg?20080321154201"
              },
              {
                "uri": "ZpZXMvcG9ubmayje52546VsdmFuLXBhcnQtaS1mdWxsLW1vdmllLWRvd25sb2FkLWZyZWUtaGluZGktZHViYmVkLWhkLw==MjAyMi1tb3",
                "name": "Big Buck Bunny",
                "year": "2008",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/424px-Big_buck_bunny_poster_big.jpg?20080321154201"
              },
              {
                "uri": "ZpZXMvcG9ubmayje52546VsdmFuLXBhcnQtaS1mdWxsLW1vdmllLWRvd25sb2FkLWZyZWUtaGluZGktZHViYmVkLWhkLw==MjAyMi1tb3",
                "name": "Big Buck Bunny",
                "year": "2008",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/424px-Big_buck_bunny_poster_big.jpg?20080321154201"
              },
              {
                "uri": "ZpZXMvcG9ubmayje52546VsdmFuLXBhcnQtaS1mdWxsLW1vdmllLWRvd25sb2FkLWZyZWUtaGluZGktZHViYmVkLWhkLw==MjAyMi1tb3",
                "name": "Big Buck Bunny",
                "year": "2008",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/424px-Big_buck_bunny_poster_big.jpg?20080321154201"
              },
              {
                "uri": "ZpZXMvcG9ubmayje52546VsdmFuLXBhcnQtaS1mdWxsLW1vdmllLWRvd25sb2FkLWZyZWUtaGluZGktZHViYmVkLWhkLw==MjAyMi1tb3",
                "name": "Big Buck Bunny",
                "year": "2008",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/424px-Big_buck_bunny_poster_big.jpg?20080321154201"
              },
              {
                "uri": "ZpZXMvcG9ubmayje52546VsdmFuLXBhcnQtaS1mdWxsLW1vdmllLWRvd25sb2FkLWZyZWUtaGluZGktZHViYmVkLWhkLw==MjAyMi1tb3",
                "name": "Big Buck Bunny",
                "year": "2008",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/424px-Big_buck_bunny_poster_big.jpg?20080321154201"
              },
              {
                "uri": "ZpZXMvcG9ubmayje52546VsdmFuLXBhcnQtaS1mdWxsLW1vdmllLWRvd25sb2FkLWZyZWUtaGluZGktZHViYmVkLWhkLw==MjAyMi1tb3",
                "name": "Big Buck Bunny",
                "year": "2008",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/424px-Big_buck_bunny_poster_big.jpg?20080321154201"
              },
              {
                "uri": "ZpZXMvcG9ubmayje52546VsdmFuLXBhcnQtaS1mdWxsLW1vdmllLWRvd25sb2FkLWZyZWUtaGluZGktZHViYmVkLWhkLw==MjAyMi1tb3",
                "name": "Big Buck Bunny",
                "year": "2008",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/424px-Big_buck_bunny_poster_big.jpg?20080321154201"
              },
              {
                "uri": "ZpZXMvcG9ubmayje52546VsdmFuLXBhcnQtaS1mdWxsLW1vdmllLWRvd25sb2FkLWZyZWUtaGluZGktZHViYmVkLWhkLw==MjAyMi1tb3",
                "name": "Big Buck Bunny",
                "year": "2008",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/424px-Big_buck_bunny_poster_big.jpg?20080321154201"
              },
              {
                "uri": "ZpZXMvcG9ubmayje52546VsdmFuLXBhcnQtaS1mdWxsLW1vdmllLWRvd25sb2FkLWZyZWUtaGluZGktZHViYmVkLWhkLw==MjAyMi1tb3",
                "name": "Big Buck Bunny",
                "year": "2008",
                "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/424px-Big_buck_bunny_poster_big.jpg?20080321154201"
              }
            ]
          })
    }, 400)
    /* requestAJAX(window.location.origin + BASE_URL_SEP + loc, { post, get }, (responseText) => {
        try {
            let jsonResponse = JSON.parse(responseText);
            console.log("fetch success");
            successCallback(jsonResponse)
        } catch (e) {
            console.log("fetch error");
            errorCallback(e.code, e.message)
        }

    }, errorCallback) */
}

function requestAJAX(url, { post, get }, successCallback, errorCallback) {
    const target = new URL(url)
    target.search = new URLSearchParams(get).toString()
    var request = new XMLHttpRequest();
    request.open("GET", target);
    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            successCallback(this.responseText);
        } else if (this.readyState === 4) {
            errorCallback(this.status, this.message);
        }
    };
    var formData = new FormData();
    if (post != null)
        for (var key in post) {
            formData.append(key, post[key]);
        }
    // request.setRequestHeader("api-key", "dZkklw2ei76Wkjio9lHhi1se");
    request.send(formData);
}