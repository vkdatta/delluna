export const name="floppy-disk-back-fill";
export const id="dl_8e0f51c471634bf28da2";
export const url=new URL("../icons/floppy-disk-back-fill.svg?v=3bbe58f122ef53e96bdff2dacf704a77dcaa23d77f16169ef2e643310cfc8ddd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
