export const name="currency_yen";
export const id="dl_6c950dc2aed8bc9f0905";
export const url=new URL("../icons/currency_yen.svg?v=4081156252a00c970953d9199be438e75b84a920ce1b2dc91b99b4612311516e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
