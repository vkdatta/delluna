export const name="3d-fill";
export const id="dl_3e3740d2a3b14c4aa140";
export const url=new URL("../icons/3/3d-fill.svg?v=38051b5d721436f0941a59cd26e5c98848d8b481900e8cc6616d0cf076952f98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
