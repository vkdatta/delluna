export const name="currency-kzt-bold";
export const id="dl_7537968a62314beeac19";
export const url=new URL("../icons/currency-kzt-bold.svg?v=bc1ce45177c5c42cc6c12a322ec60b2e6698ca5dea93a7f67a6e5588e7b85263",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
