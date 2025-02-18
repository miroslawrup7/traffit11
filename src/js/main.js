import { translate_static, translate_dynamic } from './i18n.min.js'

"use strict"

const jobLoc = document.querySelector(".job");
const jobLabelLoc = document.querySelector(".job label");
const jobInputLoc = document.querySelector(".job input");
const jobClearBtnLoc = jobLoc.querySelector(".clear-btn")

const cityLoc = document.querySelector(".city");
const cityListBtnLoc = document.querySelector(".city .arrow-down");
const cityListTitleLoc = document.querySelector(".city .list-title");
const citySelectedOptionsLoc = document.querySelector(".city .selected-options");
const cityListLoc = document.querySelector(".city .list");

const distanceLoc = document.querySelector(".distance");
const distanceListBtnLoc = document.querySelector(".distance .arrow-down");
const distanceListTitleLoc = document.querySelector(".distance .list-title");
const distanceListLoc = document.querySelector(".distance .list");

const sectorLoc = document.querySelector(".sector");
const sectorListBtnLoc = document.querySelector(".sector .arrow-down");
const sectorListTitleLoc = document.querySelector(".sector .list-title");
const sectorSelectedOptionsLoc = document.querySelector(".sector .selected-options");
const sectorListLoc = document.querySelector(".sector .list");

const employmentFormLoc = document.querySelector(".employment-form");
const employmentFormListBtnLoc = document.querySelector(".employment-form .arrow-down");
const employmentFormListTitleLoc = document.querySelector(".employment-form .list-title");
const employmentFormSelectedOptionsLoc = document.querySelector(".employment-form .selected-options");
const employmentFormListLoc = document.querySelector(".employment-form .list");

const workingHoursLoc = document.querySelector(".working-hours");
const workingHoursListBtnLoc = document.querySelector(".working-hours .arrow-down");
const workingHoursListTitleLoc = document.querySelector(".working-hours .list-title");
const workingHoursSelectedOptionsLoc = document.querySelector(".working-hours .selected-options");
const workingHoursListLoc = document.querySelector(".working-hours .list");

const languageLoc = document.querySelector(".language");
const languageListBtnLoc = document.querySelector(".language .arrow-down");
const languageListTitleLoc = document.querySelector(".language .list-title");
const languageSelectedOptionsLoc = document.querySelector(".language .selected-options");
const languageListLoc = document.querySelector(".language .list");

const awardedResultsLoc = document.querySelector(".awarded");
const recordsOnPageLoc = document.querySelector(".records-on-page");
const pagesSwitchLoc = document.querySelector(".pages");
const pagesContainer = document.querySelector(".pages-container");
let pageButtonsLoc = document.querySelectorAll(".page");

const brancheWrapperLoc = document.querySelector(".sector");
const branchesLoc = document.querySelector(".sector ul");
const jobFormLoc = document.querySelector(".employment-form ul"); 
const jobTypeLoc = document.querySelector(".working-hours ul"); 
const langLoc = document.querySelector(".language ul");
const citiesLoc = document.querySelector(".city ul");
const resultsLoc = document.querySelector(".results");

const remoteLoc = document.querySelector(".remote");
const remoteInputLoc = document.querySelector("#remote");
const relocationLoc = document.querySelector(".relocation");
const relocationInputLoc = document.querySelector("#relocation");
const searchInputLoc = document.querySelector(".job input");

const distanceInputsLoc = document.querySelectorAll(".distance input");
const distanceTitleLoc = document.querySelector(".distance .list-title");

const searchBtn = document.querySelector(".search-btn");

const advancedSearchBar = document.querySelector(".wrapper.five");
const advancedSearchBtn = document.querySelector(".advanced-search-btn .arrow-down");
const advancedContainer = document.querySelector(".advanced-container");

let lang ="PL"

// Send data from iframe to parent ///////////////////////////////////////////
// const setParentIframeHeight = () => {
//     const iframeHeight = document.body.scrollHeight
//     window.parent.postMessage(iframeHeight, 'https://miroslawrup7.github.io');
// }

// =====================

jobLoc.addEventListener("click", (e) => {
    jobLabelLoc.classList.add("mini");
    jobInputLoc.classList.add("active");
    jobClearBtnLoc.style.opacity = "0.5";
    jobClearBtnLoc.style.display = "flex";
})

jobInputLoc.addEventListener("blur", (event) => {
    if (!event.target.value) {
        jobLabelLoc.classList.remove("mini");
        jobInputLoc.classList.remove("active");
        jobClearBtnLoc.style.opacity = "0";
        jobClearBtnLoc.style.display = "none";
    }
})

jobClearBtnLoc.addEventListener("click", (e) => {
    e.stopPropagation()
    jobInputLoc.value = "";
    jobLabelLoc.classList.remove("mini");
    jobInputLoc.classList.remove("active");
    jobClearBtnLoc.style.opacity = "0";
    jobClearBtnLoc.style.display = "none";
    searchBtn.click();
})

// const removePaddingBottomToFilterList = (filterList) => {
//     filterList.closest(".element").style.paddingBottom = "";
//     filterList.closest(".element").style.boxShadow = "";
//     filterList.closest(".element").style.height = ""
// }

// const addPaddingBottomToFilterList = (filterList) => {
//     if (filterList.closest(".element").style.paddingBottom === "" ) {
//         const listCount = Array.from(document.querySelector(".list").querySelectorAll("ul")).reduce((count, ul) => count + ul.querySelectorAll("li").length, 0);
//         const liStyle = getComputedStyle(document.querySelector(".list ul li"));
//         const liStyleMarginBottom = parseInt(liStyle.marginBottom.split(0,-2));
//         const liStyleHeight = document.querySelector(".list ul li").offsetHeight;
//         const titleHeight = document.querySelector(".list-title").offsetHeight;
//         const totalCount = (listCount * (liStyleMarginBottom + liStyleHeight)) + titleHeight + (liStyleMarginBottom * 2);
//         const listHeight = totalCount > 400 ? 400 : totalCount;
        
//         filterList.closest(".element").style.paddingBottom = "15px";
//         filterList.closest(".element").style.boxShadow = "0px 0px 3px rgba(0,0,0,0.1)";
//         filterList.closest(".element").style.height = listHeight +"px";
//     } else {
//         removePaddingBottomToFilterList(filterList);
//     }
// }

const dropDownListArray = [cityLoc, distanceLoc, sectorLoc, employmentFormLoc, workingHoursLoc, languageLoc]

dropDownListArray.forEach((elem) => {
    elem.querySelector(".list-title").addEventListener("click", () => {
        elem.querySelector(".list").classList.toggle("expand");
        elem.querySelector(".arrow-down").classList.toggle("rotate180");
        // addPaddingBottomToFilterList(elem.querySelector(".list-title"));
    })
})

dropDownListArray.forEach((elem) => {
    elem.addEventListener("mouseleave", () => {
        elem.querySelector(".list").classList.remove("expand");
        elem.querySelector(".arrow-down").classList.remove("rotate180");
        // removePaddingBottomToFilterList(elem.querySelector(".list-title"));
    })
})

// document.addEventListener("touchstart", function (event) {
//     const target = event.target;
//     const isTargetInArray = dropDownListArray.some(selector => {
//         let expand = selector.querySelector('.expand');

//         return selector.contains(expand) && !selector.contains(event.target);
//       });
  
//     if (isTargetInArray) {
//         dropDownListArray.forEach((elem) => {
//             elem.querySelector(".list").classList.remove("expand");
//             elem.querySelector(".arrow-down").classList.remove("rotate180");
//             removePaddingBottomToFilterList(elem.querySelector(".list-title"));
//         });
//     }
// })

let filterConfigData = {};
let apiPage = 1;
let rawAPIArray = [];
let allRecordsArray = [];
let recordsNumber = 0;
let firstRecordNumber = 0;
let recordsOnPage = 20;
let filtersON = false;
let filterBranchesList = [];
let filterJobFormList = [];
let filterJobTypeList = [];
let filterLangList = [];
let filterCountriesList = {};
let filteredRecordsArray_11;
let apiNumber

// change distance label after choose
distanceInputsLoc.forEach((elem) => {
    elem.addEventListener("change", () => {
        distanceTitleLoc.innerText = `+${Number(elem.value)} km`;
        distanceTitleLoc.dataset.distance = Number(elem.value);
        searchBtn.click();
    })
})

recordsOnPageLoc.value = recordsOnPage;

const filterListLocArray = [cityLoc, sectorLoc, employmentFormLoc, workingHoursLoc, languageLoc];
let selectedOptionsInFilterArray = [[],[],[],[],[],[]];

const setClearBtn = () => {
    filterListLocArray.forEach((elem, index) => {

        // selectedOptionsInFilterArray.push([]);
    
        const clearBtn = elem.querySelector(".clear-btn");
        const filtersQuantityBtn = elem.querySelector(".filters-quantity");
        const filtersSelectedOptions = elem.querySelector(".selected-options");
        const filtersListTitle = elem.querySelector(".list-title");
    
        clearBtn.addEventListener("mouseenter", () => {
            if (selectedOptionsInFilterArray[index].length !== 0) {
                filtersQuantityBtn.style.opacity = "0";
                clearBtn.style.opacity = "1";
            }
        });
        
        clearBtn.addEventListener("mouseleave", () => {
            if (selectedOptionsInFilterArray[index].length !== 0) {
                filtersQuantityBtn.style.opacity = "1";
                clearBtn.style.opacity = "0";
            }
        });
    
        clearBtn.addEventListener("click", () => {
            if (selectedOptionsInFilterArray[index].length !== 0) {
                selectedOptionsInFilterArray[index] = [];
                clearBtn.style.opacity = "0";
                elem.querySelectorAll("input").forEach((el) => {
                    el.checked = false;
                })
                filtersSelectedOptions.innerText = "";
                filtersListTitle.classList.remove("mini");
                filtersQuantityBtn.style.opacity = "0";
                searchBtn.click();
            }
        });
    })
}

setClearBtn()

const actionAfterFilterInputChange = (e) => {
    const filterParentLoc = e.target.closest(".drop-down-container");
    const filtersQuantityBtn = filterParentLoc.querySelector(".filters-quantity");
    const filtersListTitleLoc = filterParentLoc.querySelector(".list-title");
    const filtersSelectedOptionsLoc = filterParentLoc.querySelector(".selected-options");
   
    const indexFilter = filterListLocArray.indexOf(filterParentLoc);

    if (e.target.checked) {
        selectedOptionsInFilterArray[indexFilter].push(e.target.name);
    } else {
        const indexDeletedItem = selectedOptionsInFilterArray[indexFilter].indexOf(e.target.id);
        selectedOptionsInFilterArray[indexFilter].splice(indexDeletedItem,1);
    }

    if (selectedOptionsInFilterArray[indexFilter].length !== 0) {
        filtersListTitleLoc.classList.add("mini");
        filtersQuantityBtn.style.opacity = "1";
        filtersQuantityBtn.innerText = selectedOptionsInFilterArray[indexFilter].length;
    } else {
        filtersListTitleLoc.classList.remove("mini");
        filtersQuantityBtn.style.opacity = "0";
    }

    filtersSelectedOptionsLoc.innerText = selectedOptionsInFilterArray[indexFilter].join(", ");
    searchBtn.click();
}

const addListenerToFilterListsElements = () => {
    
    document.querySelectorAll(".city ul input").forEach((elem) => {
        elem.addEventListener("change", actionAfterFilterInputChange);
    })
    
    document.querySelectorAll(".sector ul input").forEach((elem) => {
        elem.addEventListener("change", actionAfterFilterInputChange);
    })

    document.querySelectorAll(".employment-form ul input").forEach((elem) => {
        elem.addEventListener("change", actionAfterFilterInputChange);
    })

    document.querySelectorAll(".working-hours ul input").forEach((elem) => {
        elem.addEventListener("change", actionAfterFilterInputChange);
    })

    document.querySelectorAll(".language ul input").forEach((elem) => {
        elem.addEventListener("change", actionAfterFilterInputChange);
    })

};

// create RECORDS BOXES ///////////////////////////////////////////////
const createRecordBoxes = (recordsArray, firstRecordNumber, recordsOnPage) => {
    resultsLoc.replaceChildren();

    for (let i = firstRecordNumber; i < recordsOnPage; i++) {
        // colouring of records by type of recruitment

        if (recordsArray[i]) {
            let borderColorClass = "";
            let textColorClass = "";
            
            if (Object.keys(filterConfigData).length !== 0 && filterConfigData.recruitmentType_colorOnly.length) {
                if (filterConfigData.recruitmentType_colorOnly.indexOf("PT") !== -1) {
                    if (recordsArray[i].recruitmentType === "PT") {
                        borderColorClass = "pt-border";
                        textColorClass = "pt-text";
                    }
                }

                if (filterConfigData.recruitmentType_colorOnly.indexOf("RS") !== -1) {
                    if (recordsArray[i].recruitmentType === "RS") {
                        borderColorClass = "rs-border";
                        textColorClass = "rs-text";
                    }
                }

                if (filterConfigData.recruitmentType_colorOnly.indexOf("WEW") !== -1) {
                    if (recordsArray[i].recruitmentType === "WEW") {
                        borderColorClass = "wew-border";
                        textColorClass = "wew-text";
                    }
                }
            } else {
                if (recordsArray[i].recruitmentType === "PT") {
                    borderColorClass = "pt-border";
                    textColorClass = "pt-text";
                }
                if (recordsArray[i].recruitmentType === "RS") {
                    borderColorClass = "rs-border";
                    textColorClass = "rs-text";
                }
                if (recordsArray[i].recruitmentType === "WEW") {
                    borderColorClass = "wew-border";
                    textColorClass = "wew-text";
                }
            }

            let formaZatrudnienia = "";

            if (recordsArray[i].jobForm) {
                recordsArray[i].jobForm.forEach(function (elem) {

                const lang_PL_jobForm_id = translate_dynamic.forma["PL"].indexOf(elem)
                const jobForm_in_lang = translate_dynamic.forma[lang][lang_PL_jobForm_id]

                    formaZatrudnienia = formaZatrudnienia + "<p>" + jobForm_in_lang + "</p>";
                });
            }

            const lang_PL_branche_id = translate_dynamic.branza["PL"].indexOf(recordsArray[i].branche)
            const branche_in_lang = translate_dynamic.branza[lang][lang_PL_branche_id]

            const lang_PL_jobType_id = translate_dynamic.wymiar["PL"].indexOf(recordsArray[i].jobType)
            const jobType_in_lang = translate_dynamic.wymiar[lang][lang_PL_jobType_id]

            let remote_in_lang;
            
            if (recordsArray[i].remote === "1") {
                remote_in_lang = translate_dynamic.zdalna[lang][0]
            }

            let relocation_in_lang;

            if (recordsArray[i].relocation === "1") {
                relocation_in_lang = translate_dynamic.relokacja[lang][0]
            }

            resultsLoc.insertAdjacentHTML("beforeend", 
            `<a href="${recordsArray[i].url }" target="_blank">
                <div class="result ${borderColorClass}">
                    <div class="top">
                        <div class="lang"><p>${recordsArray[i].lang}</p></div>
                        <div class="branche-name">
                            <div class="branche">${branche_in_lang ? branche_in_lang : "" }</div>
                            <div class="name ${textColorClass}">${recordsArray[i].name}</div>
                        </div>
                    </div>

                    <div class="bottom">
                        <div class="city-container">
                            <div class="city"><img src="./img/location_dot.svg">${recordsArray[i].city}</div>
                        </div>
                        <div class="details-container">
                            ${jobType_in_lang ? "<div class='jobtype'>" + jobType_in_lang + "</div>" : ""}
                            ${recordsArray[i].visibleRate ? recordsArray[i].salaryFrom && recordsArray[i].salaryTo ? "<div class='salary'>" + recordsArray[i].salaryFrom + " - " + recordsArray[i].salaryTo + "</div>"  : "" : ""}
                            ${remote_in_lang ? "<div class='remote'>" + remote_in_lang + "</div>" : "" }
                            ${relocation_in_lang ? "<div class='relocation'>" + relocation_in_lang + "</div>" : "" }
                            <div class="employmentform">${formaZatrudnienia}</div>
                        </div>
                    </div>
                   
                </div>
            </a>`
            );
        }
    }
    // setParentIframeHeight()
};

const setPages = (recordsNumber) => {
    pagesQuantityCalc = Math.ceil(recordsNumber / recordsOnPage);

    if (pagesQuantityCalc > maxPageBtns) {
        pagesSwitchLoc.replaceChildren();

        for (let n=1; n <= maxPageBtns; n++) {
            if (n === 1) {
                pagesSwitchLoc.insertAdjacentHTML("beforeend",`<div class="page active">${n}</div>`);
            } else {
                pagesSwitchLoc.insertAdjacentHTML("beforeend",`<div class="page">${n}</div>`);
            }
        }
        pagesSwitchLoc.insertAdjacentHTML("beforeend",`<div class="next active"><img src="./img/chevron-right.svg" alt="" /></div>`);
        let nextBtnLoc = document.querySelector(".next");
        nextBtnLoc.addEventListener("click", () => {
            moveNextPagesBtns();
        });
    } else {
        pagesSwitchLoc.replaceChildren();

        for (let n=1; n <= pagesQuantityCalc; n++) {
            if (n === 1) {
                pagesSwitchLoc.insertAdjacentHTML("beforeend",`<div class="page active">${n}</div>`);
            } else {
                pagesSwitchLoc.insertAdjacentHTML("beforeend",`<div class="page">${n}</div>`);
            }
        }
        pagesSwitchLoc.insertAdjacentHTML("beforeend",`<div class="next"><img src="" alt="" /></div>`);
    }

    pagesSwitchLoc.insertAdjacentHTML("afterbegin",`<div class="prev"><img src="" alt="" /></div>`);

    pageButtonsLoc = document.querySelectorAll(".page");
    pageButtonsLoc.forEach((el) => {
        el.addEventListener("click", (e) => {
            changePage(e.target);
        });
    });
    
};

// filter the data to create FILTERED OBJECTS ARRAY ///////////////////////////////
const createFilteredRecordsArray = () => {

    const branchesChildrenLoc = branchesLoc.querySelectorAll("li input");
    const jobFormChildrenLoc = jobFormLoc.querySelectorAll("li input");
    const jobTypeChildrenLoc = jobTypeLoc.querySelectorAll("li input");
    const langChildrenLoc = langLoc.querySelectorAll("li input");
    const citiesChildrenLoc = citiesLoc.querySelectorAll("li input");

    let filteredRecordsArray = allRecordsArray;

    // selectedBranches ////////////////
    let selectedBranches = [];

    if (Object.keys(filterConfigData).length !== 0 && filterConfigData.branche_filter.length) {
        selectedBranches = filterConfigData.branche_filter;

        let selectedBranchesOnList = Array.from(branchesChildrenLoc).filter(function (elem) {
            return elem.checked
        })

        if (selectedBranchesOnList.length > 0) {

            selectedBranches = Array.from(branchesChildrenLoc)
            .filter(function (elem) {
                return elem.checked
            })
            .map(function (elem) {
                return elem.id
            })
        }

    } else {
        selectedBranches = Array.from(branchesChildrenLoc)
            .filter(function (elem) {
                return elem.checked
            })
            .map(function (elem) {
                return elem.id
            })
    }
    
    let filteredRecordsArray_1 = [];

    if (selectedBranches.length !== 0) {
        filteredRecordsArray.forEach((el, index) => {
            let addFlag = false;

            selectedBranches.forEach((selectedFiltr) => {
                if (el.branche === selectedFiltr) {
                    addFlag = true;
                }
            });

            if (addFlag) {
                filteredRecordsArray_1.push(el);
            }
        });
    } else {
        filteredRecordsArray_1 = filteredRecordsArray;
    }

    // selectedJobForms ////////////////
    let selectedJobForms = [];

    selectedJobForms = Array.from(jobFormChildrenLoc)
        .filter(function (elem) {
            return elem.checked;
        })
        .map(function (elem) {
            return elem.id;
        });

    let filteredRecordsArray_2 = [];

    if (selectedJobForms.length !== 0) {
        filteredRecordsArray_1.forEach((el, index) => {
            if (el.jobForm) {
                let addFlag = false;

                selectedJobForms.forEach((selectedFiltr) => {
                    if (el.jobForm.indexOf(selectedFiltr) !== -1) {
                        addFlag = true;
                    }
                });

                if (addFlag) {
                    filteredRecordsArray_2.push(el);
                }
            }
        });
    } else {
        filteredRecordsArray_2 = filteredRecordsArray_1;
    }

    // selectedJobTypes ////////////////
    let selectedjobTypes = Array.from(jobTypeChildrenLoc)
        .filter(function (elem) {
            return elem.checked;
        })
        .map(function (elem) {
            return elem.id;
        });

    let filteredRecordsArray_3 = [];

    if (selectedjobTypes.length !== 0) {
        filteredRecordsArray_2.forEach((el, index) => {
            let addFlag = false;

            selectedjobTypes.forEach((selectedFiltr) => {
                if (el.jobType === selectedFiltr) {
                    addFlag = true;
                }
            });

            if (addFlag) {
                filteredRecordsArray_3.push(el);
            }
        });
    } else {
        filteredRecordsArray_3 = filteredRecordsArray_2;
    }

    // selectedLangs ////////////////
    let selectedLangs = [];

    if (Object.keys(filterConfigData).length !== 0 && filterConfigData.language_filter.length) {
        selectedLangs = filterConfigData.language_filter


        let selectedLangsOnList = Array.from(langChildrenLoc).filter(function (elem) {
            if (elem.value) {
                return elem.checked
            }
        })

        if (selectedLangsOnList.length > 0) {

            selectedLangs = Array.from(langChildrenLoc)
            .filter(function (elem) {
                return elem.checked
            })
            .map(function (elem) {
                return elem.value
            })
        }

    } else {
        selectedLangs = Array.from(langChildrenLoc)
            .filter(function (elem) {
                return elem.checked
            })
            .map(function (elem) {
                return elem.value
            });
    } 
    
    let filteredRecordsArray_4 = [];

    if (selectedLangs.length !== 0) {
        filteredRecordsArray_3.forEach((el, index) => {
            let addFlag = false;

            selectedLangs.forEach((selectedFiltr) => {
                if (el.lang === selectedFiltr) {
                    addFlag = true;
                }
            });

            if (addFlag) {
                filteredRecordsArray_4.push(el);
            }
        });
    } else {
        filteredRecordsArray_4 = filteredRecordsArray_3
    }

    // selectedCountry ////////////////

    let selectedCountry = []
    let filteredRecordsArray_5 = []

    if (Object.keys(filterConfigData).length !== 0 && filterConfigData.location_country_filter.length) {
        selectedCountry = filterConfigData.location_country_filter
        filteredRecordsArray_4.forEach((el) => {
            let addFlag = false

            selectedCountry.forEach((selectedFiltr) => {
                if (el.country === selectedFiltr) {
                    addFlag = true
                }
            })

            if (addFlag) {
                filteredRecordsArray_5.push(el)
            }
        })
    } else {
        filteredRecordsArray_5 = filteredRecordsArray_4
    }

    let filteredRecordsArray_6 = filteredRecordsArray_5

    // selectedCity & selectedDistance ////////////////

    let selectedCity = [];

    if (Object.keys(filterConfigData).length !== 0 && filterConfigData.location_city_filter.length) {
        selectedCity = filterConfigData.location_city_filter
        // cityLoc.style.display = "none"

        let selectedCityOnList = Array.from(citiesChildrenLoc).filter(function (elem) {
            if (elem.value) {
                return elem.checked
            }
        })

        if (selectedCityOnList.length > 0) {

            selectedCity = Array.from(citiesChildrenLoc)
            .filter(function (elem) {
                if (elem.value) {
                    return elem.checked
                }
            })
            .map(function (elem) {
                if (elem.value) {
                    return [elem.value, elem.dataset.county]
                }
            })
        }

    } else {
        selectedCity = Array.from(citiesChildrenLoc)
        .filter(function (elem) {
            if (elem.value) {
                return elem.checked
            }
        })
        .map(function (elem) {
            if (elem.value) {
                return [elem.value, elem.dataset.county]
            }
        })
    }
    
    let filteredRecordsArray_7 = []

    if (Object.keys(filterConfigData).length !== 0 && filterConfigData.location_distance !== null) {
        distanceLoc.style.display = "none"
    }

    if (selectedCity.length) {
        
        let selectedDistance = parseInt(distanceTitleLoc.dataset.distance)

        let lati
        let longi
        let min_lati
        let max_lati
        let min_longi
        let max_longi

        selectedCity.forEach((el_city) => {

            min_lati = 0
            max_lati = 0
            min_longi = 0
            max_longi = 0

            filteredRecordsArray_6.forEach((el_record) => {
                
                if (el_city[1] !== "") {
                    if (el_city[0] === el_record.city && el_city[1] === el_record.county) {
                        lati = el_record.lati
                        longi = el_record.longi
                        if (Object.keys(filterConfigData).length !== 0 && filterConfigData.location_distance !== null) {
                            selectedDistance = filterConfigData.location_distance
                            distanceLoc.style.display = "none"
                        }
                        min_lati = lati - selectedDistance * 0.009044
                        max_lati = lati + selectedDistance * 0.009044
                        min_longi = longi - (selectedDistance * 0.0089831) / Math.cos((lati * Math.PI) / 180)
                        max_longi = longi + (selectedDistance * 0.0089831) / Math.cos((lati * Math.PI) / 180)
                    }
                } else {
                    if (el_city[0] === el_record.city) {
                        lati = el_record.lati
                        longi = el_record.longi
                        if (Object.keys(filterConfigData).length !== 0 && filterConfigData.location_distance !== null) {
                            selectedDistance = filterConfigData.location_distance
                            distanceLoc.style.display = "none"
                        }
                        min_lati = lati - selectedDistance * 0.009044
                        max_lati = lati + selectedDistance * 0.009044
                        min_longi = longi - (selectedDistance * 0.0089831) / Math.cos((lati * Math.PI) / 180)
                        max_longi = longi + (selectedDistance * 0.0089831) / Math.cos((lati * Math.PI) / 180)
                    }
                }

                if (
                    el_record.lati <= max_lati &&
                    el_record.lati >= min_lati &&
                    el_record.longi <= max_longi &&
                    el_record.longi >= min_longi
                ) {
                    filteredRecordsArray_7.push(el_record)
                }
            })
        })
        
    } else {
        filteredRecordsArray_7 = filteredRecordsArray_6
    }
   
    // selectedRemote ////////////////

    let filteredRecordsArray_8 = [];

        if (remoteInputLoc.checked || filterConfigData.remote_filter) {
            filteredRecordsArray_7.forEach((el) => {
                let addFlag = false

                if (el.remote) {
                    addFlag = true
                }

                if (addFlag) {
                    filteredRecordsArray_8.push(el)
                }
            })
        
        } else {
            filteredRecordsArray_8 = filteredRecordsArray_7
        }

    // selectedRelocation ////////////////
    let filteredRecordsArray_9 = []

    if (relocationInputLoc.checked) {
        filteredRecordsArray_8.forEach((el) => {
            let addFlag = false

            if (el.relocation) {
                addFlag = true
            }

            if (addFlag) {
                filteredRecordsArray_9.push(el)
            }
        })
    } else {
        filteredRecordsArray_9 = filteredRecordsArray_8
    }

    // searchText ////////////////

    let filteredRecordsArray_10 = []

    let searchText = searchInputLoc.value

    if (searchText) {
        filteredRecordsArray_9.forEach((el) => {
            let addFlag = false

            let position

            el.description.forEach(function (elem) {
                if (elem.value && elem.field_id !== "geolocation") {
                    position = elem.value
                        .toLowerCase()
                        .search(searchText.toLowerCase());
                    if (position !== -1) {
                        addFlag = true
                    }
                }
            })

            position = el.name.toLowerCase().search(searchText.toLowerCase())
            if (position !== -1) {
                addFlag = true
            }

            if (addFlag) {
                filteredRecordsArray_10.push(el)
            }
        })
    } else {
        filteredRecordsArray_10 = filteredRecordsArray_9
    }

    // selectedRecruitmentType (coloring of records) ////////////////

    filteredRecordsArray_11 = []
    
    let selectedRecruitmentType = []

    if (Object.keys(filterConfigData).length !== 0 && filterConfigData.recruitmentType_filter.length) {
        selectedRecruitmentType = filterConfigData.recruitmentType_filter
        filteredRecordsArray_10.forEach((el) => {
            let addFlag = false

            selectedRecruitmentType.forEach((selectedFiltr) => {
                if (el.recruitmentType === selectedFiltr) {
                    addFlag = true
                }
            })

            if (addFlag) {
                filteredRecordsArray_11.push(el)
            }
        })
    }  else {
        filteredRecordsArray_11 = filteredRecordsArray_10
    }

    recordsNumber = filteredRecordsArray_11.length

    createRecordBoxes(filteredRecordsArray_11, 0, recordsOnPage)
  
    setPages(recordsNumber)
    filtersON = true

    // setParentIframeHeight()
}

const pagesContainerStart = () => {
    pagesContainer.classList.add("active");
};

const dropDownBtnStart = () => {
    dropDownLoc.addEventListener("click", showHideFilters);

    dropDownLoc.classList.add("active");
};

// create HTML FILTERS LISTS //////////////////////////////////////////////////////
const createFilterLists = (filterConfigData) => {

    if (filterConfigData) {
        if (!filterConfigData.relocation_visible) {
            relocationLoc.classList.add("unactive");
        }
    
        if (!filterConfigData.language_visible) {
            languageLoc.classList.add("unactive");
        }
    
        if (!filterConfigData.remote_visible) {
            remoteLoc.classList.add("unactive");
        }
    
        if (!filterConfigData.location_visible) {
            cityLoc.classList.add("unactive");
            distanceLoc.classList.add("unactive");
        }
    
        if (!filterConfigData.branche_visible) {
            sectorLoc.classList.add("unactive");
        }
    }
    
    if (filterBranchesList.length > 0) {
        filterBranchesList.sort(function (a, b) {
            return a.localeCompare(b);
        });
        
        filterBranchesList.forEach(function (el) {

            const lang_PL_branche_id = translate_dynamic.branza["PL"].indexOf(el)
            const branche_in_lang = translate_dynamic.branza[lang][lang_PL_branche_id]

            branchesLoc.insertAdjacentHTML(
                "beforeend",
                `<li>
                <div class="checkbox-container-small">
                    <label class="checkbox">
                        <input type="checkbox" id="${el}" name="${el}" value="${branche_in_lang}">
                        <span class="checkmark"></span>
                    </label>
                    <label class="label-text" for="${el}">${branche_in_lang}</label>
                </div>
            </li>`
            );
        });
    }

    if (filterJobFormList.length > 0) {
        filterJobFormList.sort(function (a, b) {
            return a.localeCompare(b);
        });

        filterJobFormList.forEach(function (el) {

            const lang_PL_JobForm_id = translate_dynamic.forma["PL"].indexOf(el)
            const jobForm_in_lang = translate_dynamic.forma[lang][lang_PL_JobForm_id]

            jobFormLoc.insertAdjacentHTML(
                "beforeend",
                `<li>
                <div class="checkbox-container-small">
                    <label class="checkbox">
                        <input type="checkbox" id="${el}" name="${el}" value="${jobForm_in_lang}">
                        <span class="checkmark"></span>
                    </label>
                    <label class="label-text" for="${el}">${jobForm_in_lang}</label>
                </div>
            </li>`
            );
        });
    }

    if (filterJobTypeList.length > 0) {

        filterJobTypeList.sort(function (a, b) {
            return a.localeCompare(b);
        });

        filterJobTypeList.forEach(function (el) {

            const lang_PL_JobType_id = translate_dynamic.wymiar["PL"].indexOf(el)
            const jobType_in_lang = translate_dynamic.wymiar[lang][lang_PL_JobType_id]

            jobTypeLoc.insertAdjacentHTML(
                "beforeend",
                `<li>
                <div class="checkbox-container-small">
                    <label class="checkbox">
                        <input type="checkbox" id="${el}" name="${el}" value="${jobType_in_lang}">
                        <span class="checkmark"></span>
                    </label>
                    <label class="label-text" for="${el}">${jobType_in_lang}</label>
                </div>
            </li>`
            );
        });
    }

    if (filterLangList.length > 0) {
        filterLangList.sort(function (a, b) {
            return a.localeCompare(b);
        });

        filterLangList.forEach(function (el) {
            langLoc.insertAdjacentHTML(
                "beforeend",
                `<li>
                <div class="checkbox-container-small">
                    <label class="checkbox">
                        <input type="checkbox" id="${el}" name="${el}" value="${el}">
                        <span class="checkmark"></span>
                    </label>
                    <label class="label-text" for="${el}">${el}</label>
                </div>
            </li>`
            );
        });
    }

    if (Object.keys(filterCountriesList).length > 0) {

        function compare(a, b) {
            return a.cityCountyArray[0].localeCompare(b.cityCountyArray[0]);
        }

        for (let key in filterCountriesList) {
            filterCountriesList[key].sort(compare);
        } 

        let allCitiesObj = [];
        for (let key in filterCountriesList) {
            allCitiesObj = allCitiesObj.concat(filterCountriesList[key]);
        }

        let allCitiesArray = [];
        allCitiesObj.forEach((el) => {
            allCitiesArray.push(el.cityCountyArray);
        })

        allCitiesArray.forEach((elem, index) => {
            let duplicateExist = false
            allCitiesArray.forEach((elm, id) => {
                if (elem[0] === elm[0] && index !== id) {
                    duplicateExist = true
                }
            })
            if (!duplicateExist) {
                allCitiesArray[index][1] = ""
            }
        })
    
        allCitiesArray.sort(function ([a], [b]) {
            return a[0].localeCompare(b[0]);
        });

        allCitiesArray.forEach(function (el) {
            let cityText
            el[1] ? cityText = el[0] + " (pow. " + el[1] + ")" : cityText = el[0]

            citiesLoc.insertAdjacentHTML(
                "beforeend",
                `<li>
                <div class="checkbox-container-small">
                    <label class="checkbox">
                        <input type="checkbox" id="${cityText}" name="${cityText}" value="${el[0]}" data-county="${el[1]}">
                        <span class="checkmark"></span>
                    </label>
                    <label class="label-text" for="${cityText}">${cityText}</label>
                </div>
            </li>`
            );
        });
    }
};

// PAGES /////////////////////////////////////////////////////////////
let globActivePageNo;

const changePage = (pageBtn) => {
    pageButtonsLoc.forEach((el) => {
        el.classList.remove("active");
    });
    pageBtn.classList.add("active");
    let firstRecord =
        recordsOnPage * parseInt(pageBtn.innerText) - recordsOnPage;
    let lastRecord = recordsOnPage * parseInt(pageBtn.innerText);

    filtersON
        ? createRecordBoxes(filteredRecordsArray_11, firstRecord, lastRecord)
        : createRecordBoxes(allRecordsArray, firstRecord, lastRecord);
    globActivePageNo = parseInt(pageBtn.innerText);

    // setParentIframeHeight()
};

const movePrevPagesBtns = () => {
    let firstDispalyedPageNo = parseInt(
        Array.from(document.querySelectorAll(".page")).shift().innerText
    );
    let lastDispalyedPageNo = parseInt(
        Array.from(document.querySelectorAll(".page")).pop().innerText
    );

    let activePageNo;
    activePageNo = document.querySelector(".page.active");

    if (activePageNo) {
        activePageNo = parseInt(activePageNo.innerText);
    }

    if (firstDispalyedPageNo > 1) {
        pagesSwitchLoc.replaceChildren();

        for (let n = firstDispalyedPageNo - 1; n <= lastDispalyedPageNo - 1; n++) {
            if (!activePageNo) {
                activePageNo = globActivePageNo;
            }
            if (activePageNo && n === activePageNo) {
                pagesSwitchLoc.insertAdjacentHTML(
                    "beforeend",
                    `<div class="page active">${n}</div>`
                );
            } else {
                pagesSwitchLoc.insertAdjacentHTML(
                    "beforeend",
                    `<div class="page">${n}</div>`
                );
            }
        }

        if (lastDispalyedPageNo < pagesQuantityCalc + 1) {
            pagesSwitchLoc.insertAdjacentHTML(
                "beforeend",
                `<div class="next active"><img src="./img/chevron-right.svg" alt="" /></div>`
            );
            let nextBtnLoc = document.querySelector(".next");
            nextBtnLoc.addEventListener("click", () => {
                moveNextPagesBtns();
            });
        } else {
            pagesSwitchLoc.insertAdjacentHTML(
                "beforeend",
                `<div class="next"><img src="" alt="" /></div>`
            );
        }

        if (firstDispalyedPageNo > 2) {
            pagesSwitchLoc.insertAdjacentHTML(
                "afterbegin",
                `<div class="prev active"><img src="./img/chevron-left.svg" alt="" /></div>`
            );
            let prevBtnLoc = document.querySelector(".prev");
            prevBtnLoc.addEventListener("click", () => {
                movePrevPagesBtns();
            });
        } else {
            pagesSwitchLoc.insertAdjacentHTML(
                "afterbegin",
                `<div class="prev"><img src="" alt="" /></div>`
            );
        }

        pageButtonsLoc = document.querySelectorAll(".page");
        pageButtonsLoc.forEach((el) => {
            el.addEventListener("click", (e) => {
                changePage(e.target);
            });
        });
    }
};

const moveNextPagesBtns = () => {
    let firstDispalyedPageNo = parseInt(
        Array.from(document.querySelectorAll(".page")).shift().innerText
    );
    let lastDispalyedPageNo = parseInt(
        Array.from(document.querySelectorAll(".page")).pop().innerText
    );

    let activePageNo;
    activePageNo = document.querySelector(".page.active");
    if (activePageNo) {
        activePageNo = parseInt(activePageNo.innerText);
        globActivePageNo = activePageNo;
    }

    if (lastDispalyedPageNo < pagesQuantityCalc) {
        pagesSwitchLoc.replaceChildren();

        for (let n = firstDispalyedPageNo + 1; n <= lastDispalyedPageNo + 1; n++) {
            if (!activePageNo) {
                activePageNo = globActivePageNo;
            }
            if (activePageNo && n === activePageNo) {
                pagesSwitchLoc.insertAdjacentHTML(
                    "beforeend",
                    `<div class="page active">${n}</div>`
                );
            } else {
                pagesSwitchLoc.insertAdjacentHTML(
                    "beforeend",
                    `<div class="page">${n}</div>`
                );
            }
        }

        if (lastDispalyedPageNo < pagesQuantityCalc - 1) {
            pagesSwitchLoc.insertAdjacentHTML(
                "beforeend",
                `<div class="next active"><img src="./img/chevron-right.svg" alt="" /></div>`
            );
            let nextBtnLoc = document.querySelector(".next");
            nextBtnLoc.addEventListener("click", () => {
                moveNextPagesBtns();
            });
        } else {
            pagesSwitchLoc.insertAdjacentHTML(
                "beforeend",
                `<div class="next"><img src="" alt="" /></div>`
            );
        }

        if (firstDispalyedPageNo > 0) {
            pagesSwitchLoc.insertAdjacentHTML(
                "afterbegin",
                `<div class="prev active"><img src="./img/chevron-left.svg" alt="" /></div>`
            );
            let prevBtnLoc = document.querySelector(".prev");
            prevBtnLoc.addEventListener("click", () => {
                movePrevPagesBtns();
            });
        } else {
            pagesSwitchLoc.insertAdjacentHTML(
                "afterbegin",
                `<div class="prev"><img src="" alt="" /></div>`
            );
        }

        pageButtonsLoc = document.querySelectorAll(".page");
        pageButtonsLoc.forEach((el) => {
            el.addEventListener("click", (e) => {
                changePage(e.target);
            });
        });
    }
};

// RWD /////////////////////////////////////////////////////////////
function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
}

function getHeight() {
    return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight
    );
}

let pagesQuantityCalc;

let maxPageBtns;

const setPagesBtnQuantity = () => {

let newMaxPageBtns;

    if (getWidth() < 500) {newMaxPageBtns = 3}
    if (getWidth() >= 500 && getWidth() < 650) {newMaxPageBtns = 3}
    if (getWidth() >= 650 && getWidth() < 750) {newMaxPageBtns = 4}
    if (getWidth() >= 750 && getWidth() < 950) {newMaxPageBtns = 7}
    if (getWidth() >= 950 && getWidth() < 1200) {newMaxPageBtns = 12}
    if (getWidth() >= 1200) {newMaxPageBtns = 15}

    if (newMaxPageBtns !== maxPageBtns) {
        maxPageBtns = newMaxPageBtns
        setPages(recordsNumber);
    }
}

window.addEventListener("resize", () => {
    setPagesBtnQuantity();
});

setPagesBtnQuantity();

const filterAwarded = (configFilterArray, awardedRecordsArray, property) => {
    
    for (let i = awardedRecordsArray.length-1; i>=0; i--) {

        let findFlag = false;
        configFilterArray.forEach((element)=>{
          
            if (awardedRecordsArray[i][property] === element) {
                findFlag = true;
            }
        })

        if (!findFlag) {
            awardedRecordsArray.splice(i, 1)
        }
    }
}

// create AWARDED RECORDS BOXES ///////////////////////////////////////////////
const createAwardedRecordBoxes = (recordsArray, filterConfigData) => {

    awardedResultsLoc.replaceChildren();

    let awardedRecordsArray = recordsArray.filter((elem) => {
        return elem.awarded;  
    });

    if (awardedRecordsArray.length > 0) {

        if (filterConfigData) {

            if (filterConfigData.remote_filter) {
                awardedRecordsArray = awardedRecordsArray.filter((elem) => {
                    return elem.remote;
                });
            }
            
            if (filterConfigData.language_filter.length > 0) {
                filterAwarded(filterConfigData.language_filter, awardedRecordsArray, "lang");
            }

            if (filterConfigData.branche_filter.length > 0) {
                filterAwarded(filterConfigData.branche_filter, awardedRecordsArray, "branche");
            }

            if (filterConfigData.location_country_filter.length > 0) {
                filterAwarded(filterConfigData.location_country_filter, awardedRecordsArray, "country");
            }

            if (filterConfigData.location_city_filter.length > 0) {
                filterAwarded(filterConfigData.location_city_filter, awardedRecordsArray, "city");
            }

            if (filterConfigData.recruitmentType_filter.length > 0) {
                filterAwarded(filterConfigData.recruitmentType_filter, awardedRecordsArray, "recruitmentType");
            }

        }

        for (let i = firstRecordNumber; i < 10; i++) {
            if (awardedRecordsArray[i]) {
                let borderColorClass = "";
                let textColorClass = "";

                if (awardedRecordsArray[i].recruitmentType === "PT") {
                    borderColorClass = "pt-border";
                    textColorClass = "pt-text";
                }
                if (awardedRecordsArray[i].recruitmentType === "RS") {
                    borderColorClass = "rs-border";
                    textColorClass = "rs-text";
                }
                if (awardedRecordsArray[i].recruitmentType === "WEW") {
                    borderColorClass = "wew-border";
                    textColorClass = "wew-text";
                }

                let formaZatrudnienia = "";

                if (awardedRecordsArray[i].jobForm) {
                    awardedRecordsArray[i].jobForm.forEach(function (elem) {

                        const lang_PL_jobForm_id = translate_dynamic.forma["PL"].indexOf(elem)
                        const jobForm_in_lang = translate_dynamic.forma[lang][lang_PL_jobForm_id]

                        formaZatrudnienia = formaZatrudnienia + "<p>" + jobForm_in_lang + "</p>";
                    });
                }


                const lang_PL_branche_id = translate_dynamic.branza["PL"].indexOf(awardedRecordsArray[i].branche)
                const branche_in_lang = translate_dynamic.branza[lang][lang_PL_branche_id]
    
                const lang_PL_jobType_id = translate_dynamic.wymiar["PL"].indexOf(awardedRecordsArray[i].jobType)
                const jobType_in_lang = translate_dynamic.wymiar[lang][lang_PL_jobType_id]

                let remote_in_lang;
            
                if (awardedRecordsArray[i].remote === "1") {
                    remote_in_lang = translate_dynamic.zdalna[lang][0]
                }

                let relocation_in_lang;

                if (awardedRecordsArray[i].relocation === "1") {
                    relocation_in_lang = translate_dynamic.relokacja[lang][0]
                }


                awardedResultsLoc.insertAdjacentHTML(
                    "beforeend",
                    `<a href="${
                        awardedRecordsArray[i].url
                    }" target="_blank"><div class="result ${borderColorClass}">
                <div class="top">
                
                        <div class="lang">
                            <p>${awardedRecordsArray[i].lang}</p>
                        </div>
                        <div class="branche-name">
                            <div class="branche">${
                                branche_in_lang
                                    ? branche_in_lang
                                    : ""
                            }</div>
                            <div class="name ${textColorClass}">${
                        awardedRecordsArray[i].name
                    }</div>
                        </div>
                    
                </div>

                <div class="bottom">
                    <div class="city-container">
                        <div class="city"><img src="./img/location_dot.svg">${
                            awardedRecordsArray[i].city
                        }</div></div>
                        <div class="details-container">
                        ${
                            remote_in_lang
                                ? "<div class='remote'>" + remote_in_lang + "</div>"
                                : ""
                        }
                        ${
                            relocation_in_lang
                                ? "<div class='relocation'>" + relocation_in_lang + "</div>"
                                : ""
                        }
                        ${
                            jobType_in_lang
                                ? "<div class='jobtype'>" +
                                jobType_in_lang +
                                "</div>"
                                : ""
                        }
                        ${
                            awardedRecordsArray[i].visibleRate
                                ? awardedRecordsArray[i].salaryFrom &&
                                awardedRecordsArray[i].salaryTo
                                    ? "<div class='salary'>" +
                                    awardedRecordsArray[i].salaryFrom +
                                    " - " +
                                    awardedRecordsArray[i].salaryTo +
                                    "</div>"
                                    : ""
                                : ""
                        }
                        <div class="employmentform">${formaZatrudnienia}</div>
                        </div>
                    
                </div>

                <div class="ribbon-wrap">
                        <div class="ribbon">
                                <img src="./img/star.svg" alt="">
                                <img src="./img/star.svg" alt="">
                                <img src="./img/star.svg" alt="">
                            </div>
                        </div>
                </div>

            </div></a>`
                );
            }
        }
    } else {
        awardedResultsLoc.style.margin = "0"
    }
}

// show RECORDS NUMBER ///////////////////////////////////////////////
// const summariseDownload = (recordsNumber) => {
//     recNumLoc.innerText = `Znaleziono ${recordsNumber} ogłoszeń`;
//     if (!recordsNumber) {
//         noResultsLoc.classList.add("active");
//     } else {
//         noResultsLoc.classList.remove("active");
//     }
// }

// create FILTER DATA from API data ///////////////////////////////////////////////

const createDataForFilters = (
    branche,
    jobForm,
    jobType,
    lang,
    visibleRate,
    salaryFrom,
    salaryTo,
    country,
    cityCountyArray,
    lati,
    longi
    ) => {

    // BranchesList
   
    if (filterBranchesList.indexOf(branche) === -1 && branche !== undefined) {
        if (Object.keys(filterConfigData).length !== 0 && filterConfigData.branche_filter.length) {
            if (filterConfigData.branche_filter.indexOf(branche) !== -1) {
                filterBranchesList.push(branche)
            }
        } else {
            filterBranchesList.push(branche)
        }
    }

    // JobFormList

    if (jobForm) {
        jobForm.forEach((elem) => {
            if (filterJobFormList.indexOf(elem) === -1) {
                filterJobFormList.push(elem)
            }
        })
    }

    // JobTypeList

    if (Array.isArray(jobType)) {
        jobType = jobType[0]
    }

    if (filterJobTypeList.indexOf(jobType) === -1 && jobType !== undefined) {
        filterJobTypeList.push(jobType)
    }

    // LangList

    if (filterLangList.indexOf(lang) === -1) {
        if (Object.keys(filterConfigData).length !== 0) {
            if (filterConfigData.language_filter.length) {
                if (filterConfigData.language_filter.indexOf(lang) !== -1) {
                    filterLangList.push(lang)
                }
            } else {
                filterLangList.push(lang)
            }
        } else {
            filterLangList.push(lang)
        }
    }

    // CountriesList

    let itemFilterExists = false

    if (Object.keys(filterConfigData).length !== 0) {
        if (!filterCountriesList[country]) {
            filterCountriesList[country] = []
        }

        if (filterConfigData.location_city_filter.length) { // gdy w config jest city filter wypełnione
            for (let i=0; i<filterConfigData.location_city_filter.length; i++) {
                if (filterConfigData.location_city_filter[i][1] !== "") {
                    if (filterConfigData.location_city_filter[i][0] === cityCountyArray[0] && filterConfigData.location_city_filter[i][1] === cityCountyArray[1]) {
                        for (let k=0; k<filterCountriesList[country].length; k++) {
                            if (filterCountriesList[country][k]["cityCountyArray"][0] === cityCountyArray[0] && filterCountriesList[country][k]["cityCountyArray"][1] === cityCountyArray[1]) {
                                itemFilterExists = true
                                break
                            }
                        }
                        if (!itemFilterExists) {
                            filterCountriesList[country].push({
                                cityCountyArray: cityCountyArray,
                                lati: lati,
                                longi: longi,
                            });
                        }
                    }
                } else {
                    if (filterConfigData.location_city_filter[i][0] === cityCountyArray[0]) {
                        for (let k=0; k<filterCountriesList[country].length; k++) {
                            if (filterCountriesList[country][k]["cityCountyArray"][0] === cityCountyArray[0]) {
                                itemFilterExists = true
                                break
                            }
                        }
                        if (!itemFilterExists) {
                            filterCountriesList[country].push({
                                cityCountyArray: cityCountyArray,
                                lati: lati,
                                longi: longi,
                            });
                        }
                    }
                }
            }
        } else if (filterConfigData.location_country_filter.length) { // gdy w config jest country filter wypełnione
            for (let i=0; i<filterConfigData.location_country_filter.length; i++) {
                if (filterConfigData.location_country_filter.indexOf(country) !== -1) {
                    for (let k=0; k<filterCountriesList[country].length; k++) {
                        if (filterCountriesList[country][k]["cityCountyArray"][0] === cityCountyArray[0] && filterCountriesList[country][k]["cityCountyArray"][1] === cityCountyArray[1]) {
                            itemFilterExists = true
                            break
                        }
                    }
                    if (!itemFilterExists) {
                        filterCountriesList[country].push({
                            cityCountyArray: cityCountyArray,
                            lati: lati,
                            longi: longi,
                        });
                    }
                }
            }
        } else { // jezeli w pliku config nie ma ustawionego filtra: location_country_filter ani location_city_filter

            for (let k=0; k<filterCountriesList[country].length; k++) {
                if (filterCountriesList[country][k]["cityCountyArray"][0] === cityCountyArray[0] && filterCountriesList[country][k]["cityCountyArray"][1] === cityCountyArray[1]) {
                    itemFilterExists = true
                    break
                }
            }
            
            if (!itemFilterExists) {
                filterCountriesList[country].push({
                    cityCountyArray: cityCountyArray,
                    lati: lati,
                    longi: longi,
                });
            }
        }
    } else { // jeżeli nie ma pliku config.json

        if (!filterCountriesList[country]) {
            filterCountriesList[country] = []
        }

        for (let k=0; k<filterCountriesList[country].length; k++) {
            if (filterCountriesList[country][k]["cityCountyArray"][0] === cityCountyArray[0] && filterCountriesList[country][k]["cityCountyArray"][1] === cityCountyArray[1]) {
                itemFilterExists = true
                break
            }
        }
        
        if (!itemFilterExists) {
            filterCountriesList[country].push({
                cityCountyArray: cityCountyArray,
                lati: lati,
                longi: longi,
            });
        }
    }
}

// create OBJECTS ARRAY from Raw API JSON ///////////////////////////////////////////////
const reworkData = (rawAPIArray) => {

    rawAPIArray.forEach((el) => {

        let parsedJobLocation;
        if (el.options.job_location) {
            parsedJobLocation = JSON.parse(el.options.job_location);
        }

        allRecordsArray.push({
            url: el.url,
            name: el.advert.name,
            branche: el.options.branches,
            lang: el.advert.language,
            jobType: el.options.job_type,
            visibleRate: parseInt(el.options._Widoczna_stawka),
            salaryFrom: parseInt(el.options._spodziewane_wynagrodzenie_od),
            salaryTo: parseInt(el.options._spodziewane_wynagrodzenie_do),
            remote: el.options.remote,
            relocation: el.options._relokacja,
            recruitmentType: el.options._rekrutacja_rodzaj,
            jobForm: el.options._forma_zatrudnienia,
            country: parsedJobLocation.country,
            city: parsedJobLocation.locality,
            county: parsedJobLocation.region2,
            lati: parseFloat(parsedJobLocation.latitude),
            longi: parseFloat(parsedJobLocation.longitude),
            description: el.advert.values,
            awarded: el.awarded,
        });

        let filtersFlag = true

        if (filterConfigData.branche_filter.length && filtersFlag) {
            filtersFlag = false
            filterConfigData.branche_filter.forEach((elem1) => {
                if (el.options.branches === elem1) {
                    filtersFlag = true
                }
            })
        }

        if (filterConfigData.language_filter.length && filtersFlag) {
            filtersFlag = false
            filterConfigData.language_filter.forEach((elem2) => {
                if (el.advert.language === elem2) {
                    filtersFlag = true
                }
            })
        }

        if (filterConfigData.location_country_filter.length && filtersFlag) {
            filtersFlag = false
            filterConfigData.location_country_filter.forEach((elem3) => {
                if (parsedJobLocation.country === elem3) {
                    filtersFlag = true
                }
            })
        }

        if (filterConfigData.location_city_filter.length && filtersFlag) {
            filtersFlag = false
            filterConfigData.location_city_filter.forEach((elem4) => {
                if (parsedJobLocation.locality === elem4[0]) {
                    if (elem4[1] !== "") {
                        if (parsedJobLocation.region2 === elem4[1]) {
                            filtersFlag = true
                        }
                    } else {
                        filtersFlag = true
                    }
                }
            })
        }

        if (filtersFlag === true) {
       
            createDataForFilters(
                el.options.branches,
                el.options._forma_zatrudnienia,
                el.options.job_type,
                el.advert.language,
                parseInt(el.options._Widoczna_stawka),
                parseInt(el.options._spodziewane_wynagrodzenie_od),
                parseInt(el.options._spodziewane_wynagrodzenie_do),
                parsedJobLocation.country,
                [parsedJobLocation.locality, parsedJobLocation.region2],
                parseFloat(parsedJobLocation.latitude),
                parseFloat(parsedJobLocation.longitude)
            )
        }
    })
}

// gets DATA FROM API ///////////////////////////////////////////////
const getAPI = (apiPage) => {
    const response = fetch(
        "https://grupaprogres.traffit.com/public/job_posts/published",
        // "./config/response.json",
        {
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "X-Request-Page-Size": "100",
                "X-Request-Current-Page": apiPage,
                "X-Request-Sort": '{"sort_by": "id", "direction": "ASC"}',
            },
        }
    );

    return response;
}

// gets DATA FROM API 2 ///////////////////////////////////////////////
const getAPI_2 = (apiPage) => {
    const response = fetch(
        "https://rsgrupaprogres.traffit.com/public/job_posts/published",
        {
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "X-Request-Page-Size": "100",
                "X-Request-Current-Page": apiPage,
                "X-Request-Sort": '{"sort_by": "id", "direction": "ASC"}',
            },
        }
    );

    return response;
}

const loopOnAPI = (jsonData, filterConfigData) => {
    if (jsonData.length > 0 && apiNumber === 1) {
        rawAPIArray = rawAPIArray.concat(jsonData)
        apiPage++
        createRecordsObjFromAPI(apiPage, filterConfigData)
    } else if (jsonData.length === 0  && apiNumber === 1) {
        apiPage = 1
        createRecordsObjFromAPI_2(apiPage, filterConfigData)
    } else if (jsonData.length > 0  && apiNumber === 2) {
        rawAPIArray = rawAPIArray.concat(jsonData)
        apiPage++
        createRecordsObjFromAPI_2(apiPage, filterConfigData)
    } else {
        reworkData(rawAPIArray)
        recordsNumber = rawAPIArray.length
        createAwardedRecordBoxes(allRecordsArray, filterConfigData)
        setPages(recordsNumber)
        createFilterLists(filterConfigData)
        addListenerToFilterListsElements()
        createFilteredRecordsArray()
        distanceInputsLoc.forEach((elem) => {
            elem.checked = false
        })
        jobInputLoc.value = ""
    }
}

async function createRecordsObjFromAPI(apiPage, filterConfigData) {
    apiNumber = 1
    const rawData = await getAPI(apiPage)
    const jsonData = await rawData.json()
    loopOnAPI(jsonData, filterConfigData)
}

async function createRecordsObjFromAPI_2(apiPage, filterConfigData) {
    apiNumber = 2
    const rawData = await getAPI_2(apiPage)
    const jsonData = await rawData.json()
    loopOnAPI(jsonData, filterConfigData)
}

// consider configuration filters ////////////////////////
const getConfigFilter = () => {
    const response = fetch("./config/config.json");
    return response;
}

async function readConfigFilter() {
    try {
        const rawData = await getConfigFilter();
        filterConfigData = await rawData.json();
        createRecordsObjFromAPI(apiPage, filterConfigData);
        loadLanguages();
    } catch (e) {
        console.error(e);
        createRecordsObjFromAPI(apiPage);
    }
}

readConfigFilter();

// change RECORDS QUANTITY ON PAGE //////////////////////////////////////////////////
recordsOnPageLoc.addEventListener("change", (e) => {
    recordsOnPage = parseInt(e.target.value);

    filtersON
        ? createRecordBoxes(filteredRecordsArray_11, 0, recordsOnPage)
        : createRecordBoxes(allRecordsArray, 0, recordsOnPage);
    setPages(recordsNumber);

    // setParentIframeHeight()
})

// SEARCH LISTENER /////////////////////////////////////////////////////////////
searchBtn.addEventListener("click", createFilteredRecordsArray);

advancedSearchBar.addEventListener("click", () => {
    advancedContainer.classList.toggle("showed");
    advancedSearchBtn.classList.toggle("rotate180");
    // setParentIframeHeight()
})

const clearAllFiltersLoc = document.querySelector(".clear-all-filters")

clearAllFiltersLoc.addEventListener("click", () => {

    filterListLocArray.forEach((elem, index) => {

        const clearBtn = elem.querySelector(".clear-btn");
        const filtersQuantityBtn = elem.querySelector(".filters-quantity");
        const filtersSelectedOptions = elem.querySelector(".selected-options");
        const filtersListTitle = elem.querySelector(".list-title");

        selectedOptionsInFilterArray[index] = [];
        clearBtn.style.opacity = "0";
        elem.querySelectorAll("input").forEach((el) => {
            el.checked = false;
        })
        filtersSelectedOptions.innerText = "";
        filtersListTitle.classList.remove("mini");
        filtersQuantityBtn.style.opacity = "0";
    })

    jobInputLoc.value = "";
    jobLabelLoc.classList.remove("mini");
    jobInputLoc.classList.remove("active");
    jobClearBtnLoc.style.opacity = "0";
    jobClearBtnLoc.style.display = "none";

    distanceLoc.querySelectorAll("input").forEach((elem) => {
        elem.checked = false;
    })
    distanceListTitleLoc.innerText = "+0 km";
    createFilteredRecordsArray();
});

jobInputLoc.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      searchBtn.click();
    }
});

jobInputLoc.addEventListener("blur", () => {
    if (jobInputLoc.value !== "") {
        searchBtn.click();
    }
});

jobInputLoc.addEventListener("input", () => {
    if (jobInputLoc.value === "") {
      searchBtn.click();
    }
});

remoteInputLoc.addEventListener("change", () => {
    searchBtn.click();
})

relocationInputLoc.addEventListener("change", () => {
    searchBtn.click();
})

// LANGUAGES

const loadLanguages = () => {

    lang = filterConfigData.set_language

    if (lang !== "PL" && lang !== "EN" && lang !== "RU" && lang !== "UK") { lang = "PL" }

    const createDB = () => {
        let openRequest = indexedDB.open("languageDB", 1);

        openRequest.onupgradeneeded = function () {
            let db = openRequest.result;
            if (!db.objectStoreNames.contains("language")) {
                db.createObjectStore("language", { autoIncrement: true });
            }
        };
    }

    const saveLng = (lng) => {
        let openRequest = indexedDB.open("languageDB");

        openRequest.onsuccess = function () {
            let db = openRequest.result;
            let transaction = db.transaction("language", "readwrite");
            let languageTrans = transaction.objectStore("language");

            let lang = lng;

            let request = languageTrans.put(lang, "lang");

            request.onsuccess = function () {};

            request.onerror = function () {
                console.log("Error", request.error);
            };
        };
    }

    const getLng = () => {
        let openRequest = indexedDB.open("languageDB");

        openRequest.onsuccess = function () {
            let db = openRequest.result;
            let transaction = db.transaction("language");
            let languageTrans = transaction.objectStore("language");

            let request = languageTrans.get("lang");

            request.onsuccess = function () {
                languageSet(request.result)
            }

            request.onerror = function () {
                console.log("Error", request.error)
            }
        }
    }

    const languageSet = (lang) => {
        for (let objKey in translate_static[lang]) {
            document.getElementById(objKey).innerText = translate_static[lang][objKey]
        }
    }

    createDB()

    getLng()

    saveLng(lang)

    languageSet(lang);
}