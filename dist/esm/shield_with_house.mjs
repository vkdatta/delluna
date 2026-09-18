export const name="shield_with_house";
export const id="dl_1dcf62d557af401796a4";
export const url=new URL("../icons/shield_with_house.svg?v=9c77d2495bd697c6128901e993bf675b743bf02dfa79c947484fef189a2e16fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
