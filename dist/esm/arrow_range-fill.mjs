export const name="arrow_range-fill";
export const id="dl_44cbd15b9107485d855c";
export const url=new URL("../icons/arrow_range-fill.svg?v=3346450ff5a092cffff88aa9ddf149ce03d78e8305456cee8cfa8c5d9548b2c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
