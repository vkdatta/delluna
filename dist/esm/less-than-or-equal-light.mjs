export const name="less-than-or-equal-light";
export const id="dl_348a27005563420eb125";
export const url=new URL("../icons/less-than-or-equal-light.svg?v=50121c3ba0278c84f4c02d7faac0d9f19d138aee4f5805812f6ab54ecce0b576",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
