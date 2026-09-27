export const name="washoku-fill";
export const id="dl_b8d200e6ff9c657114ab";
export const url=new URL("../icons/washoku-fill.svg?v=5c0449303f20a488cffecd74eb4947c30aa97b8095785888278fb1377f86fa43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
