export const name="fire_hydrant";
export const id="dl_dcc475fe6625d6b521f0";
export const url=new URL("../icons/fire_hydrant.svg?v=a6e833890f1f77b579120397e93641f7a0d0931221abbb70d7370e04c3dbe09e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
