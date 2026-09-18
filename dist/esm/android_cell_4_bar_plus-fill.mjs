export const name="android_cell_4_bar_plus-fill";
export const id="dl_bcd7fd191d80433db20e";
export const url=new URL("../icons/android_cell_4_bar_plus-fill.svg?v=bc3c534a8766cdffdb8a3e815fae1dbb01a8a2901d3f8f49955de03e40b8bd1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
