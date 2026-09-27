export const name="search_activity-fill";
export const id="dl_649901624a6fa3dc509f";
export const url=new URL("../icons/search_activity-fill.svg?v=53b75ab8095e015894a1a0f3622598406d0565094c8661fd84738e162c9bed0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
