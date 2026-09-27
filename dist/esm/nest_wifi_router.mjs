export const name="nest_wifi_router";
export const id="dl_46957f1500a6d9988772";
export const url=new URL("../icons/nest_wifi_router.svg?v=fb4376e19ce7d45b63147a49536587ebbe09496b78c67aa92f7f446e6dd6bc39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
