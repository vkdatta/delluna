export const name="lucid_2-mailbox";
export const id="dl_ae31730e768446a9985f";
export const url=new URL("../icons/lucid_2-mailbox.svg?v=246f4958c967aff0b67eff23170df002f4f32c1e3768bc03ced27bb9b1882e15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
