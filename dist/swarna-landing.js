"use strict";
const changeTheme = () => {
    var r = document.querySelector(":root");
    var rs = getComputedStyle(r);
    console.log(rs.getPropertyValue("--bg-primary"));
    const themeButton = document.getElementById("theme");
    if (rs.getPropertyValue("--bg-primary").trim() == "#ffffff") {
        r.style.setProperty("--bg-primary", rs.getPropertyValue("--bg-primary-dark"));
        r.style.setProperty("--font-primary", rs.getPropertyValue("--font-primary-dark"));
        r.style.setProperty("--font-backdrop", rs.getPropertyValue("--font-backdrop-dark"));
        themeButton.innerText = "Light";
    }
    else {
        r.style.setProperty("--bg-primary", rs.getPropertyValue("--bg-primary-light"));
        r.style.setProperty("--font-primary", rs.getPropertyValue("--font-primary-light"));
        r.style.setProperty("--font-backdrop", rs.getPropertyValue("--font-backdrop-light"));
        themeButton.innerText = "Dark";
    }
};
const jewels = [
    {
        name: "Diamanium",
        image: "./assets/jewels/LJWR073D-PM.png",
        category: "Bracelets",
    },
    {
        name: "Topazdainum",
        image: "./assets/jewels/LJWR086D-P.webp",
        category: "Earrings",
    },
    {
        name: "Opaldianum",
        image: "./assets/jewels/LJWR162P-P.png",
        category: "Bracelets",
    },
    {
        name: "Limustonum",
        image: "./assets/jewels/LJWR078D-PM.png",
        category: "Bracelets",
    },
    {
        name: "Pritimun",
        image: "./assets/jewels/LJWR124P-P.png",
        category: "Bracelets",
    },
    {
        name: "Diamanium",
        image: "./assets/jewels/LJWR287-W.png",
        category: "Bracelets",
    },
    {
        name: "Topazdainum",
        image: "./assets/jewels/LJWR126P-PM.png",
        category: "Bracelets",
    },
    {
        name: "Opaldianum",
        image: "./assets/jewels/LJWR362D-PM-1-e1649924942945.webp",
        category: "Bracelets",
    },
    {
        name: "Limustonum",
        image: "./assets/jewels/LJWR084D-P.png",
        category: "Bracelets",
    },
    {
        name: "Pritimun",
        image: "./assets/jewels/LJWR085D-P.png",
        category: "Bracelets",
    },
    {
        name: "Blistonum",
        image: "./assets/jewels/LJWR143P-PM.webp",
        category: "Bracelets",
    },
    {
        name: "Marvelonum",
        image: "./assets/jewels/LJWR392D-P.webp",
        category: "Bracelets",
    },
];
window.addEventListener("load", () => {
    const themeButton = document.getElementById("theme");
    themeButton.innerText = "Light";
    loadJewels();
    loadJewel();
});
const loadJewels = () => {
    const insertProductLocation = document.getElementById("insert-product");
    if (insertProductLocation) {
        insertProductLocation.innerHTML = "";
        let newInnerHTML = "";
        console.log(insertProductLocation);
        for (let index = 0; index < jewels.length; index++) {
            const jewel = jewels[index];
            newInnerHTML += `<a href="./product.html" onclick="function() {setJewel(${index.toString()})}">
                      <div class="product">
                        <img
                          src="${jewel.image}"
                          class="product-image"
                          alt=""
                        />

                        <div class="product-details">
                          <div class="product-title heading-secondary" >${jewel.name}</div>
                          <div class="product-title heading-tertiary">${jewel.category}</div>
                          <div class="product-desctiption heading-tertiary">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
                            consequatur quam? Ducimus incidunt, reprehend
                          </div>
                        </div>
                      </div></a
                    >`;
        }
        insertProductLocation.innerHTML = newInnerHTML;
    }
};
const loadJewel = () => {
    const insertJewelLocation = document.getElementById("jewel-insert");
    if (insertJewelLocation) {
        insertJewelLocation.innerHTML = "";
        const jewel = getJewel();
        insertJewelLocation.innerHTML = `<div class="background">
                                      <div class="background-box">
                                        <div class="background-title">${jewel.name}</div>

                                        <img
                                          class="background-image"
                                          src="${jewel.image}"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div class="types">
                                      <div class="types-group">
                                        <details class="custom-select">
                                          <summary class="radios">
                                            <input
                                              type="radio"
                                              name="material"
                                              id="material"
                                              title="MATERIAL"
                                              checked
                                            />
                                            <input type="radio" name="material" id="item1" title="Gold" />
                                            <input type="radio" name="material" id="item2" title="Silver" />
                                          </summary>
                                          <ul class="list">
                                            <li>
                                              <label for="item1">
                                                GOLD
                                                <span></span>
                                              </label>
                                            </li>
                                            <li>
                                              <label for="item2">SILVER</label>
                                            </li>
                                          </ul>
                                        </details>
                                      </div>
                                      <div class="types-group">
                                        <details class="custom-select">
                                          <summary class="radios">
                                            <input
                                              type="radio"
                                              name="item"
                                              id="default"
                                              title="DIMENSIONS"
                                              checked
                                            />
                                            <input type="radio" name="item" id="item1" title="5 ROWS" />
                                            <input type="radio" name="item" id="item2" title="6 ROWS" />
                                            <input type="radio" name="item" id="item3" title="7 ROWS" />
                                          </summary>
                                          <ul class="list">
                                            <li>
                                              <label for="item1">
                                                5 ROWS
                                                <span></span>
                                              </label>
                                            </li>
                                            <li>
                                              <label for="item2">6 ROWS</label>
                                            </li>
                                            <li>
                                              <label for="item3">7 ROWS</label>
                                            </li>
                                          </ul>
                                        </details>
                                      </div>
                                    </div>
                                    <div class="item-content">
                                      <div class="item-content-box">
                                        <div class="item-category-box">
                                          <div class="item-category-text heading-secondary">${jewel.category}</div>
                                        </div>
                                        <div class="item-id-box">
                                          <div class="item-id-text heading-secondary">LJWR362D-PM</div>
                                        </div>
                                        <div class="item-description-box">
                                          <div class="item-description-text heading-tertiary">
                                            Pink Gold 750/1000, White Diamonds 1.17Ct – Quality G/VS – Round
                                            Brilliant Cut
                                          </div>
                                        </div>

                                        <div class="item-request-info-box">
                                          <button class="btn-primary item-request-info">
                                            About
                                            <img
                                              class="btn-icon rotate-45"
                                              src="./assets/thin-up-arrow.svg"
                                              alt="Swarna Logo"
                                            />
                                          </button>
                                        </div>
                                      </div>
                                    </div>`;
    }
};
const setJewel = (id) => {
    localStorage.setItem("JEWEL", JSON.stringify(jewels[id]));
};
const getJewel = () => {
    const jewel = localStorage.getItem("JEWEL");
    if (jewel) {
        return JSON.parse(jewel);
    }
    return jewels[0];
};
//# sourceMappingURL=swarna-landing.js.map