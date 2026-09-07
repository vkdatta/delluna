export const name="lucid_3-mouse-right";
export const id="dl_f8345c58a23f4edaa000";
export const url=new URL("../icons/lucid_3-mouse-right.svg?v=3ce177ef9e13d5122b07c931cb7af4454569f8428671f46ff26c821c0e44f478",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
