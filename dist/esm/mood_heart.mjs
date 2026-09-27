export const name="mood_heart";
export const id="dl_59ef7bc2a5a03a9226a4";
export const url=new URL("../icons/mood_heart.svg?v=fee9877aacfe4263c8688f2003dc7d0f1a50c1788a7a4a78094ba1601f90414f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
