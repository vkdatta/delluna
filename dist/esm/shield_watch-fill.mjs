export const name="shield_watch-fill";
export const id="dl_8952a51cbbbb21dcbd02";
export const url=new URL("../icons/shield_watch-fill.svg?v=54adfbe96fd7b68811ebee39f442757bf469aa756f484761d3d66bd7e7926a61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
