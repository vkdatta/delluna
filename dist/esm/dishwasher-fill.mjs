export const name="dishwasher-fill";
export const id="dl_4762c2f6942d4feda3c7";
export const url=new URL("../icons/dishwasher-fill.svg?v=046054a6c1a1871264f1e9e093ac4c9d6bc1c493a7e695da17d5c578a2ba3488",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
