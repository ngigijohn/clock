const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

const dhr = document.querySelector('#dhr');
const dmn = document.querySelector('#dmn');
const dsc = document.querySelector('#dsc');
const dv = document.querySelector('#div');

setInterval(() => {
    let day = new Date();

    let dhh = day.getHours();
    let dmm = day.getMinutes();
    let dss = day.getSeconds();



    let hh = dhh * 30;
    let mm = dmm * deg;
    let ss = dss * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    dhr.innerHTML = `${dhh}`;
    dmn.innerHTML = `${dmm}`;
    dsc.innerHTML = `${dss}`;


    dv.style.width += `${dss}*5`;
});