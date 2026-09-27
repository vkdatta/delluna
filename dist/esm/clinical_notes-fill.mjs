export const name="clinical_notes-fill";
export const id="dl_a6a3f9f1f53abe161e65";
export const url=new URL("../icons/clinical_notes-fill.svg?v=83c6854865cca2551c4fa5d248f3dbe1c5d236f09739117398f4987e0d994485",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
