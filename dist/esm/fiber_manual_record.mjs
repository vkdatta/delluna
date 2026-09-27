export const name="fiber_manual_record";
export const id="dl_0bfb0f0df0bce68e878b";
export const url=new URL("../icons/fiber_manual_record.svg?v=82394d5ee51b48b4da8d75b28c13321b544e7cb3c05df7f8393d424fd5c2a13d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
