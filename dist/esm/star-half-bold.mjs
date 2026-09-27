export const name="star-half-bold";
export const id="dl_7bded7c318cc1bf61bd4";
export const url=new URL("../icons/star-half-bold.svg?v=d65a75702f7feceedf28b64af5e8e431614531f64164494591032680547279bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
