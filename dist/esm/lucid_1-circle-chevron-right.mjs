export const name="lucid_1-circle-chevron-right";
export const id="dl_059f0dabbec94b9fb9dd";
export const url=new URL("../icons/lucid_1-circle-chevron-right.svg?v=4334a0d28d07929e5524bb0790930ddce9d9cc8b7f1f8300e798b55ab4ca56c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
