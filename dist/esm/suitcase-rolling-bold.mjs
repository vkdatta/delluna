export const name="suitcase-rolling-bold";
export const id="dl_51bc9229763649899fa5";
export const url=new URL("../icons/S/suitcase-rolling-bold.svg?v=431c7d8955adc76994dbeba18d0dbf088b6dd9057a5531a3370745a189ef153b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
