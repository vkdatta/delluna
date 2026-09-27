export const name="dot-thin";
export const id="dl_e8330ac3c0ae465db274";
export const url=new URL("../icons/dot-thin.svg?v=2ff9cb6dbf62bee452f8c609c83550997ec6ca40bade051216344613fd53cab0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
