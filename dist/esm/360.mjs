export const name="360";
export const id="dl_b0a19992424e4961d2a0";
export const url=new URL("../icons/360.svg?v=61c6b245cf56106df9a10ffb802c1fb6738fd5dbd2151ff0779618dea2342444",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
