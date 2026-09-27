export const name="brightness_1-fill";
export const id="dl_19f248659f8d5ab1b1e1";
export const url=new URL("../icons/brightness_1-fill.svg?v=94f673842ce275d8117a06cf7b8ea27b17d516f608cbae7cdc579ac8b2243b8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
