export const name="sneaker-move-light";
export const id="dl_c1263dd650904427b405";
export const url=new URL("../icons/S/sneaker-move-light.svg?v=44becfd2a52a17d98971a6f5d2eb81c9eda1348a862384ffbaf2dd2c0ff67c07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
