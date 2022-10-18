(async()=>{})
async function getProducts(limits) {
  const urlFetch = `https://fakestoreapi.com/products?limit=${limits}`
  try {
    const response = await fetch(urlFetch)
    const data = await response.json()
    const info = new Array(...data)
    return info
  } catch (e) {
    console.error(e)
  }
}

export async function createShop() {
  const products = await getProducts(2)
  const product = products.map(obj => {
    return `
      <a
        href="#modal"
        class="content__item item modal__link"
        data-id="${obj.id}"
      >
        <div class="item__img">${obj.image}</div>
        <div class="item__box">
          <div class="item__title">${obj.title}</div>
          <div class="item__price">${obj.price}</div>
        </div>
      </a>
    `

  })
      .join('')
  console.log(product)
  return product
}

// const create = String(createShop)

// console.log(create)

// eslint-disable-next-line
let limits = 2
// eslint-disable-next-line
let content = ''

const urlFetch = fetch(`https://fakestoreapi.com/products?limit=${limits}`)
urlFetch.then(
    response => {
      return response.json()
    }
).then(products => {
  products.forEach(product => {
    content+= `
        <a
        href="#modal"
        class="content__item item modal__link"
        data-id="${product.id}"
      >
        <div class="item__img">${product.image}</div>
        <div class="item__box">
          <div class="item__title">${product.title}</div>
          <div class="item__price">${product.price}</div>
        </div>
      </a>
      `
  })
  return content
})


console.log(content)


const fetchPromise = fetch('https://ghibliapi.herokuapp.com/films')

fetchPromise.then(response => {
  return response.json();
}).then(films => {
  films.forEach(film => {
    return `
      <div class="col-md-6 film-heroku my-3">
        <div class="card border-primary">
          <div class="card-header bg-primary text-light">
            <div class="card-title">
              <h2>${film.title}</h2>
              <h4>Director: ${film.director}</h4>
              <h4>Producer: ${film.producer}</h4>
              <h4>Release Date: ${film.release_date}</h4>
            </div>
          </div>
          <div class="card-body" data-id="${film.id}">
            <div class="card-text">${film.description}</div>
          </div>
        </div>
      </div>`;
  });
  console.log(films);
});

export function createShopsTwo() {
  return fetchPromise()
}

// const response = await fetch('https://fakestoreapi.com/products?limit=$2')
// const data = await response.json()
// console.log(data)

// const test = newData()
// console.log(test)

// const testTwo = async () => {
//   const products = await getProducts(2)
//   if (products) {
//     return products
//   }
// }

// console.log(testTwo())

// const arr = products.map(obj => { return obj })


// const test = products[0].id

// console.log(test)

// async function data() {
//   await infoProducts
// }
// console.log(data)
// const data = [...getProducts]
// console.log(Array.isArray(data))
// console.log(...getProducts)

// const data = [{...getProducts}]
// console.log(...data)

// function data() {
//   // eslint-disable-next-line
//   let [...args] = getProducts
//   console.log(args)
//   const products = new Array(getProducts)
//   const data = [...products]
//   // console.log(data)
//   const id = data.id
//   const price = data.price
//   const title = data.title

//   console.log('id: ', id, 'price: ', price, 'title: ', title)

// }

// console.log(data())

function itemBox() {

  return '<h1>Goods</h1>'

  // return `
  //   <a
  //     href="#modal"
  //     class="content__item item modal__link"
  //     data-id="${id}"
  //   >
  //     <div class="item__img">${image}</div>
  //       <div class="item__box">
  //         <div class="item__title">${title}</div>
  //         <div class="item__price">${price}</div>
  //       </div>
  //   </a>
  // `
}
// console.log(itemBox())

export function createShopTwo() {
  const goods = new Array(itemBox)
      .map(itemBox)
      .join('')

  return goods
}

// }
// console.log(createShop(5));

// `

//           <a href="#modal" class="content__item item modal__link">
//             <div class="item__img"></div>
//             <div class="item__box">
//               <div class="item__title">min wata</div>
//               <div class="item__price">100uah/sq.m</div>
//             </div>
//           </a>

//           <div class="content__item item modal__link">
//             <div class="item__img"></div>
//             <div class="item__box">
//               <div class="item__title">min wata</div>
//               <div class="item__price">100uah/sq.m</div>
//             </div>
//           </div>

//           <div class="content__item item modal__link">
//             <div class="item__img"></div>
//             <div class="item__box">
//               <div class="item__title">min wata</div>
//               <div class="item__price">100uah/sq.m</div>
//             </div>
//           </div>

//           <div class="content__item item modal__link">
//             <div class="item__img"></div>
//             <div class="item__box">
//               <div class="item__title">min wata</div>
//               <div class="item__price">100uah/sq.m</div>
//             </div>
//           </div>

//           <div class="content__item item modal__link">
//             <div class="item__img"></div>
//             <div class="item__box">
//               <div class="item__title">min wata</div>
//               <div class="item__price">100uah/sq.m</div>
//             </div>
//           </div>

//           <div class="content__item item modal__link">
//             <div class="item__img"></div>
//             <div class="item__box">
//               <div class="item__title">min wata</div>
//               <div class="item__price">100uah/sq.m</div>
//             </div>
//           </div>

//           <div class="content__item item modal__link">
//             <div class="item__img"></div>
//             <div class="item__box">
//               <div class="item__title">min wata</div>
//               <div class="item__price">100uah/sq.m</div>
//             </div>
//           </div>

//           <div class="content__item item modal__link">
//             <div class="item__img"></div>
//             <div class="item__box">
//               <div class="item__title">min wata</div>
//               <div class="item__price">100uah/sq.m</div>
//             </div>
//           </div>`
