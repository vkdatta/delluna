export const name="currency-gbp-light";
export const id="dl_3eeb953d14da4bb8993f";
export const url=new URL("../icons/currency-gbp-light.svg?v=d8c203d546cebaf74df96fde33407359e8ab98eaf655e96a67f12e3cfc1d9a7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
