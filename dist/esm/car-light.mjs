export const name="car-light";
export const id="dl_cf0aee569a9341699455";
export const url=new URL("../icons/car-light.svg?v=448dcffa57279b01edc1609885c5131c4cddb32e9f960d45801a88669089c926",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
