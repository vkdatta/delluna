export const name="lucid_3-notebook";
export const id="dl_93b708f769ca4fa0adac";
export const url=new URL("../icons/lucid_3-notebook.svg?v=063e2217f5195a14f1a07db26a544444e26472853d95eec32668373ec84b48fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
