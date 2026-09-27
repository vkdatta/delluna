export const name="stars-fill";
export const id="dl_892a2245d3c15880e179";
export const url=new URL("../icons/stars-fill.svg?v=4c4d9b5c07f99c70f024502ceadfcb0f3b88b63366f3d1a819a846abbfa0a7c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
