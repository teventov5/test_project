
function getCountryInfo() {
    document.querySelector("#countryInfo").style.display='flex';

    let country = document.querySelector("#countryInput").value;

    let res = f1(country);
    populateInfoOnScreen(res);

}

function f1(countryName) {
    for (var i = 0; i < allCountriesArr.length; i++) {
        // console.log(allCountriesArr[i]["name"]["common"]);
        if (allCountriesArr[i]["name"]["common"].toLowerCase() === countryName.toLowerCase()) {
            return allCountriesArr[i];
        }
    }
}

function populateInfoOnScreen(theCountryObj) {


    document.querySelector("#flagImage").setAttribute("src", theCountryObj.flags.svg);

    //-------------- populate the theNameObj element ---------

    let theNameObjFromTheJSON = theCountryObj.name;
    document.querySelector("#countryName").innerHTML = theNameObjFromTheJSON.common;


    //-------------- populate the languages element ---------
    let allLangsStr = "<ul style='margin-left: 3rem;'>";
    //  get the languages from the countries JSON
    let theLangsObjFromTheJSON = theCountryObj.languages;
    //  go over all the languages, and add them to our string
    for (let [k, v] of Object.entries(theLangsObjFromTheJSON)) {
        allLangsStr += `<li> ${k} : ${v} </li>`;
    }
    allLangsStr += "</ul>";
    document.querySelector("#myLanguagesDiv").innerHTML = allLangsStr;
    //--------------------------------------------------------

    //----------- Another design for the currencies element ---------
    let allCurrenciesStr_2 = "<ul style='margin-left: 3rem;'>";
    //  get the currencies from the countries JSON
    let theCurrenciesObjFromTheJSON_2 = theCountryObj.currencies;
    //  go over all the currencies, and add them to our string
    console.log(theCurrenciesObjFromTheJSON_2)

    for (let [k, v] of Object.entries(theCurrenciesObjFromTheJSON_2)) {
        allCurrenciesStr_2 += `<li> 
                                    <ul>
                                        <li> code: ${k} </li>
                                        <li> name: ${v.name} </li>
                                        <li> symbol: ${v.symbol} </li>
                                    </ul>
                                </li>`;
    }
    allCurrenciesStr_2 += "</ul>";
    document.querySelector("#myCurrenciesDiv").innerHTML = allCurrenciesStr_2;
    //--------------------------------------------------------

    //----------- populate the borders element ---------
    let allBordersStr = "<ul style='margin-left: 3rem;'>";
    //  get the borders from the countries JSON
    let theBordersObjFromTheJSON = theCountryObj.borders;
    //  go over all the Borders, and add them to our string
    if(theBordersObjFromTheJSON)
    for (let curr of theBordersObjFromTheJSON) {
        allBordersStr += `<li> ${curr} </li>`;
    }
    allBordersStr += "</ul>";
    document.querySelector("#myBordersDiv").innerHTML = allBordersStr;
    //     //--------------------------------------------------------


    //----------- populate the population element ---------
    //  get the population from the countries JSON
    let thePopulationObjFromTheJSON = theCountryObj.population;
    document.querySelector("#myPopulationDiv").innerHTML = "Population: " + thePopulationObjFromTheJSON;
    //     //--------------------------------------------------------


    //----------- populate the capital element ---------
    //  get the population from the countries JSON
    let theCapitalObjFromTheJSON = theCountryObj.capital;
    document.querySelector("#myCapitalDiv").innerHTML = "Capital: " + theCapitalObjFromTheJSON;
    //     //--------------------------------------------------------


    //----------- populate the Latitude element ---------
    //  get the Latitude from the countries JSON
    let theLatitudeObjFromTheJSON = theCountryObj.latlng[0];
    document.querySelector("#myLatitudeDiv").innerHTML = "Latitude: " + theLatitudeObjFromTheJSON;
    //     //--------------------------------------------------------



    //----------- populate the Longitude element ---------
    //  get the population from the countries JSON
    let themyLongitudeObjFromTheJSON = theCountryObj.latlng[1];
    document.querySelector("#myLongitudeDiv").innerHTML = "Longitude: " + themyLongitudeObjFromTheJSON;
    //     //--------------------------------------------------------


    //----------- populate the calling codes element ---------
    let allCodesStr = "<ul style='margin-left: 3rem;'>";
    //  get the calling codes from the countries JSON
    let theCallingCodeObjFromTheJSON = theCountryObj.idd;

    allCodesStr += `<li> ${theCallingCodeObjFromTheJSON.root} `;
if(theCallingCodeObjFromTheJSON.suffixes.length>1){
    allCodesStr+="<br>"
    
    for (let curr of theCallingCodeObjFromTheJSON.suffixes) {
        allCodesStr += ` ${curr} ,`;
    }
}

    else allCodesStr+=theCallingCodeObjFromTheJSON.suffixes[0];
      allCodesStr += "</li>"; 
    allCodesStr += "</ul>";
    document.querySelector("#myCallingCodesDiv").innerHTML = allCodesStr;
    //     //--------------------------------------------------------



    //----------- populate the altSpelling element ---------
    let allSpellingStr = "<ul style='margin-left: 3rem;'>";
    //  get the altSpelling from the countries JSON
    let theSpellingObjFromTheJSON = theCountryObj.altSpellings;


    for (let curr of theSpellingObjFromTheJSON) {
        allSpellingStr += `<li> ${curr} </li>`;
    }
    // console.log(allSpellingStr);
    allSpellingStr += "</ul>";
    document.querySelector("#myAltSpellingDiv").innerHTML = allSpellingStr;
    //     //--------------------------------------------------------




    //----------- populate the region element ---------
    //  get the region from the countries JSON
    let theRegionObjFromTheJSON = theCountryObj.region;
    document.querySelector("#myRegionDiv").innerHTML = "Region: " + theRegionObjFromTheJSON;
    //     //--------------------------------------------------------



    //----------- populate the TimeZones element ---------
    let timeZonesStr = "<ul style='margin-left: 3rem;'>";
    //  get the timeZones from the countries JSON
    let theTimezoneObjFromTheJSON = theCountryObj.timezones;


    for (let curr of theTimezoneObjFromTheJSON) {
        timeZonesStr += `<li> ${curr} </li>`;
    }
    // console.log(timeZonesStr);
    timeZonesStr += "</ul>";
    document.querySelector("#myTimezonesDiv").innerHTML = timeZonesStr;
    //     //--------------------------------------------------------




    //----------- populate the nativeNames element ---------
    let nativeNameStr = "<ul style='margin-left: 3rem;'>";
    //  get the nativeNames from the countries JSON
    let theNativeNameObjFromTheJSON = theCountryObj.name.nativeName;

    // console.log(theNativeNameObjFromTheJSON);

    for (let curr of Object.entries(theNativeNameObjFromTheJSON)) {
        let specificLngNativeName = curr[1];
        nativeNameStr += `<li> ${curr[0]}:  ${specificLngNativeName.official} </li>`;
        // nativeNameStr += `<li> ${specificLngNativeName.official} </li>`;
    }

    nativeNameStr += "</ul>";
    document.querySelector("#myNativeNameDiv").innerHTML = nativeNameStr;
    //     //--------------------------------------------------------




}