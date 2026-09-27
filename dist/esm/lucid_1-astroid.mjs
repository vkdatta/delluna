export const name="lucid_1-astroid";
export const id="dl_dff38394a48444c6ac15";
export const url=new URL("../icons/lucid_1-astroid.svg?v=36edb733ca30f14e0e62d9a0d2be25e38aa2fccff334ec8606ef2ca549d00ced",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
