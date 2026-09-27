export const name="spatial_audio-fill";
export const id="dl_6f9bec1a43960d7e4125";
export const url=new URL("../icons/spatial_audio-fill.svg?v=3fc7141c6789a244cdaee2e427448f5127a953b594437a6d5abc982fd3ef5b9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
