export const name="stock_media-fill";
export const id="dl_7dd8d9a7abdde8a25d94";
export const url=new URL("../icons/stock_media-fill.svg?v=afa81d2b7e1c900e05e85862d755b31980e369fadd71dc4671f4034e133175a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
