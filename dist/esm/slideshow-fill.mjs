export const name="slideshow-fill";
export const id="dl_2ce6d1dbdbc845b5a0f1";
export const url=new URL("../icons/S/slideshow-fill.svg?v=9029da4128930d284ae619a8a773c3c00bd90621676f7e07d7129f51937d4310",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
