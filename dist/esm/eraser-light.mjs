export const name="eraser-light";
export const id="dl_8420b27accdf4f62b636";
export const url=new URL("../icons/eraser-light.svg?v=e617f9efedcf2b0d878f00896278644b63b1910cba402e6b5d8285c7eb703f1d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
