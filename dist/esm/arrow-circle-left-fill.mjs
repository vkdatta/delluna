export const name="arrow-circle-left-fill";
export const id="dl_027a21229d244685bdd8";
export const url=new URL("../icons/arrow-circle-left-fill.svg?v=7d23b1253f97c0da33bfbe3bb897c346ebe1d5e238f28dad147fc8f3725f4da3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
