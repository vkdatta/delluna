export const name="currency-rub-duotone";
export const id="dl_ab2e6a66a1d247e6a31d";
export const url=new URL("../icons/currency-rub-duotone.svg?v=17bd8aa8d3d953dbca70fa771515bec1eb560c49b369b83dd5705fb98e1605df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
