export const name="bomb-fill";
export const id="dl_b6d72f04fd6b4f989a5b";
export const url=new URL("../icons/bomb-fill.svg?v=5f10db1aad98be5acedfede9624b51e2fe1943017002446b701ee1fc0f3d2e5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
