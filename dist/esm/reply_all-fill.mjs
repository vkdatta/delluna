export const name="reply_all-fill";
export const id="dl_130b55c761924628b78e";
export const url=new URL("../icons/reply_all-fill.svg?v=49d67ef31901ce0bbed6e16bae1c2e8b0857c1a7d735e9d177d84e8cb3217f23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
