export const name="headset_mic-fill";
export const id="dl_a5476f02b3b28ec2d2e1";
export const url=new URL("../icons/headset_mic-fill.svg?v=544a23d024759f7dddde0ec199f5facc83350207d17f63e48a421f680285cbd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
