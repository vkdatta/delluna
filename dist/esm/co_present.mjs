export const name="co_present";
export const id="dl_b95964fc03b05bddb9bf";
export const url=new URL("../icons/co_present.svg?v=059773c7df28d1fe037840cf5adfc77eb5275b8155f1fb32739e3d8f735b9eff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
