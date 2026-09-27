export const name="horizontal_align_left-fill";
export const id="dl_fe3c233b91a455b622dc";
export const url=new URL("../icons/horizontal_align_left-fill.svg?v=2a066c26360ee514c6e3e879c5eded7bb518343f156860c7b264f75696c3251d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
