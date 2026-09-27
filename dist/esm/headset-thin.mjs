export const name="headset-thin";
export const id="dl_e18a1b26455f49088643";
export const url=new URL("../icons/headset-thin.svg?v=62ecaf52a949e89a33e67fbf214ef2bbedba3f1a8410327ff61f3202ca57aaa3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
