const xml = `
<list>
<student>
    <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
</student>
<student>
    <name lang="ru">
        <first>Петр</first>
        <second>Петров</second> 
    </name>
    <age>58</age>
    <prof>driver</prof>
</student>
</list>
`;

let dp = new DOMParser();
let xmlParse = dp.parseFromString(xml, "application/xhtml+xml");
let xmlDOM = xmlParse.querySelectorAll('student');

function parseXML(xml) {
    const arr = []

    xml.forEach(el => {
        arr.push(createObj(el.childNodes));
    })

    return arr;
}

console.log(parseXML(xmlDOM));


function createObj(xml) {
    const resultObj = {}

    resultObj.name = `${xml[1].childNodes[1].innerHTML} ${xml[1].childNodes[3].innerHTML}`;
    resultObj.age = xml[3].innerHTML;
    resultObj.prof = xml[5].innerHTML;
    resultObj.lang = xml[1].getAttribute('lang');
    
    return resultObj;
}
