export const name="filter_2-fill";
export const id="dl_6b797a4e3197c3851a2c";
export const url=new URL("../icons/filter_2-fill.svg?v=476ab09ba675fa30b7ac91e25b39bf7276f98d5577dbb3879c9c4b5013039dca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
