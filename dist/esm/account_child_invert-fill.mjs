export const name="account_child_invert-fill";
export const id="dl_fb569570f64f46d7805f";
export const url=new URL("../icons/account_child_invert-fill.svg?v=fae882b540d5fdcf242d0e6f7ede0760aa395fc423d1fb7fa6271e5b87791bcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
