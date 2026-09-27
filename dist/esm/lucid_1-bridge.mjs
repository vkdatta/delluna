export const name="lucid_1-bridge";
export const id="dl_0b9a86ee9ffe46788e89";
export const url=new URL("../icons/lucid_1-bridge.svg?v=97da6c93c257d5898646509fbdd7bce1a1fe35ec3840bbd4dad83c2a0443924c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
