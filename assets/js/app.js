//Services data
class Services{
    constructor(img , title ,text){
        this.img = img
        this.title = title
        this.text = text
    }
    showdata(){
        return `
            
          <div class="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="service-item">
              <div class="img">
                <img src="${this.img}" class="img-fluid" alt="">
              </div>
              <div class="details position-relative">
                <div class="icon">
                  <i class="bi bi-activity"></i>
                </div>
                <a href="service-details.html" class="stretched-link">
                  <h3>${this.title}</h3>
                </a>
                <p>${this.text}</p>
              </div>
            </div>
          </div>
        `
    }
}
let servicecontainer = document.getElementById('servicecontainer')
let serviceitem = [
    new Services('assets/img/services-1.jpg', 'Nesciunt' , 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis.') ,
    new Services('assets/img/services-2.jpg' , 'Eosle Commodi' , 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis alias, distinctio veniam odit commodi nulla ?'),
    new Services('assets/img/services-3.jpg' , 'Ledo Markt' , 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis alias, distinctio veniam odit commodi nulla ?')
]
for (let s = 0; s < serviceitem.length; s++) {
    servicecontainer.innerHTML += serviceitem[s].showdata()
    
}
//Portfolio data 
class Portfolio{
  constructor(img2,productname,about ){
    this.img2 = img2
    this.productname = productname
    this.about = about
  }
  showportfoliodata(){
    return `
          <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
              <div class="portfolio-content h-100">
                <img src="${this.img2}" class="img-fluid" alt="">
                <div class="portfolio-info">
                  <h4>${this.productname}</h4>
                  <p>${this.about}</p>
                  <a href="${this.img2}" title="${this.productname}" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="bi bi-zoom-in"></i></a>
                  <a href="portfolio-details.html" title="More Details" class="details-link"><i class="bi bi-link-45deg"></i></a>
                </div>
              </div>
            </div>
    `
  }
}

let portfolioarray = [
  new Portfolio('assets/img/portfolio/app-1.jpg','App 1' , 'Lorem ipsum , dolor sit amet consectetur '),
  new Portfolio('assets/img/portfolio/product-1.jpg' , 'Product 1' , 'Lorem ipsum , dolor sit amet consectetur ') ,
  new Portfolio('assets/img/portfolio/branding-1.jpg' , 'Branding 1' , 'Lorem ipsum , dolor sit amet consectetur '),
  new Portfolio('assets/img/portfolio/books-1.jpg' , 'Book 1' , 'Lorem ipsum , dolor sit amet consectetur '),
  new Portfolio('assets/img/portfolio/app-2.jpg' , 'App 2' , 'Lorem ipsum , dolor sit amet consectetur '),
  new Portfolio('assets/img/portfolio/product-2.jpg' , 'Product 2' , 'Lorem ipsum , dolor sit amet consectetur '),
  new Portfolio('assets/img/portfolio/branding-2.jpg' , 'Branding 2' , 'Lorem ipsum , dolor sit amet consectetur '),
  new Portfolio('assets/img/portfolio/books-2.jpg' , 'Book 2' , 'Lorem ipsum , dolor sit amet consectetur '),
  new Portfolio('assets/img/portfolio/app-3.jpg' , 'App 3' , 'Lorem ipsum , dolor sit amet consectetur '),
  new Portfolio('assets/img/portfolio/product-3.jpg' , 'Product 3' , 'Lorem ipsum , dolor sit amet consectetur ') ,
  new Portfolio('assets/img/portfolio/branding-3.jpg' ,'Branding 3' , 'Lorem ipsum , dolor sit amet consectetur '),
  new Portfolio('assets/img/portfolio/books-3.jpg' , 'Book 3' , 'Lorem ipsum , dolor sit amet consectetur ')
]
 let portfoliocontainer = document.getElementById('portfoliocontainer')
for (let t = 0; t < portfolioarray.length; t++) {
  portfoliocontainer.innerHTML += portfolioarray[t].showportfoliodata()
  
}

