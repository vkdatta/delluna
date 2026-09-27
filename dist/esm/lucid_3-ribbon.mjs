export const name="lucid_3-ribbon";
export const id="dl_3b3f3d22b4f64529b3dd";
export const url=new URL("../icons/lucid_3-ribbon.svg?v=8d35726b60317ef6fbef01f4fb59a2c3441ed9d50fd95f3a65aa972078fc8429",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
