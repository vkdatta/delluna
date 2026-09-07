export const name="rows-plus-top-fill";
export const id="dl_e9b0b44ffa20478c8fbf";
export const url=new URL("../icons/rows-plus-top-fill.svg?v=801f2820189cfa537a11aee3e3433169b0035a6b4cf7f364f344140157e9a12b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
