export const name="baby-carriage-fill";
export const id="dl_308ea353f5334922a648";
export const url=new URL("../icons/baby-carriage-fill.svg?v=36f6c3d2df9c6d48c5f8b472187e4b08cefc30dd26ff72c82226f940b111d16c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
