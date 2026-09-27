export const name="capture-fill";
export const id="dl_84ecbe9e962fa5ad4c55";
export const url=new URL("../icons/capture-fill.svg?v=393d34c97986fafb696372e833ce30d6212642f5e8395315f37398ed9faf3d2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
