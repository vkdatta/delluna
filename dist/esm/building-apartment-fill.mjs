export const name="building-apartment-fill";
export const id="dl_4ce899de552f48c89c20";
export const url=new URL("../icons/building-apartment-fill.svg?v=811f4a8e10bbbc3a4018df9c3176095cefb3d8f2b0c3a5e8890b9fbfdb535563",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
