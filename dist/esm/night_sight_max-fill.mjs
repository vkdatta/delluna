export const name="night_sight_max-fill";
export const id="dl_2e7292cc2d1ef2907c72";
export const url=new URL("../icons/night_sight_max-fill.svg?v=6ea2fdc96c07c7bd6d92b2aab67558ec742a476b02ad5c760e0f61d8f6989719",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
