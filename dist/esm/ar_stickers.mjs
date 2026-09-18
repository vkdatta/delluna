export const name="ar_stickers";
export const id="dl_b1b8694250d34b298a38";
export const url=new URL("../icons/ar_stickers.svg?v=009fe31e25b5f66e3bdef2d0209203182408031b14d2e8a7ad26a0cc381dddb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
