export const name="volume_up-fill";
export const id="dl_1bd1367e712b4951b8cb";
export const url=new URL("../icons/V/volume_up-fill.svg?v=9d6643104f0a8fca3815dafab3f888c6d0d1b167f2c8825fcf775baca2fdd07c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
