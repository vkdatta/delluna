export const name="science_off-fill";
export const id="dl_f6239630fa6744149005";
export const url=new URL("../icons/S/science_off-fill.svg?v=ee9b0bde7e4eab368bd3b79991c3f9971fc02a500eaa8a6fdb3a2d2ceef2c78f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
