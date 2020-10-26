class FlipCard extends HTMLElement {
    constructor() {
        super();
        this.title = "Default Title";
        this.back_title = "Default Back Title";
        this.body = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknownLorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknownLorem Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        `;
        this.image = "images/black_bg.png";
    }

    connectedCallback() {

      this.title = this.getAttribute('name-object') || this.title;
      this.back_title = this.getAttribute('back-title') || this.back_title;
      this.image = this.getAttribute('image') || this.image;
      this.body = this.getAttribute('body') || this.body;
     
      
      if (!this.shadowRoot) {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = this.template;
      }
      
      this.shadowRoot.querySelector('#title').innerHTML = this.title;
      this.shadowRoot.querySelector('#gameimg').src = this.image;
      this.shadowRoot.querySelector('#back-title').innerHTML = this.back_title;
      this.shadowRoot.querySelector('#body').innerHTML = this.body;
     
    }

    get template() {

        return `
        <div class="cardContainer">
            <div class="cardBox">
                <div class="card">
                    <div class="front-card">
                        <div class="img-container">
                            <img id="gameimg" ></img>
                        </div>
                    <h3 id="title"></h3>
                </div>
                <div class="back-card">
                    <h3 id="back-title"></h3>
                    <div class="body-container">
                        <p id="body"></p>
                    </div>
                </div>
            </div>
        </div>
           <style>
                .cardContainer {
                  display: inline-block;
                  margin: 10px;
                  min-width: 280px;
                }
                .cardBox {
                  height: 280px;
                  position: relative;
                }
               .cardBox:hover .card {
                   transform: rotateY(180deg);
               }
               .card {
                   height: 100%;
                   width: 100%;
                   transition: transform 0.8s;
  								 transform-style: preserve-3d;
                   border-style: solid;
                   border-width: 1px 1px 1px 1px;
                   border-color: #eee;
                   position:relative;
               }
               img {
                   max-width: 100%;
                   max-height: 100%;
               }
               .img-container {
               	   width: 100%;
                   height: 70%;
               }
               .front-card, .back-card {
               	   position: absolute;
                   backface-visibility: hidden;
                   -webkit-backface-visibility: hidden; /* Safari */
                   height: 100%;
                   width: 100%;
               }
               .back-card {
                   transform: rotateY(180deg);
                   display: -webkit-box;
                    -webkit-line-clamp: 14;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
               }
               .back-card h3{
                   text-align: center;
                   font-size: 16px;
               }
               .body-container {
                    width: 100%;
                    height: auto;
                  
                }
               .back-card p {
               	   padding: 10px;
                   text-align: justify;
                   font-size: 14px;
                  
               }
               .front-card {
               	    text-align: center;
                    font-size: 15px;
               }
           </style>
        `;
    }
}



window.customElements.define('flip-card', FlipCard);
