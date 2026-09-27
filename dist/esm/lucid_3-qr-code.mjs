export const name="lucid_3-qr-code";
export const id="dl_f7e5fec8aed3483c9473";
export const url=new URL("../icons/lucid_3-qr-code.svg?v=5a9e5339d4114f4fde824cb62141960cd6380b0515784665e86b4b5845459e0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
