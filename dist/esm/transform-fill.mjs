export const name="transform-fill";
export const id="dl_37614f8399516212dd76";
export const url=new URL("../icons/transform-fill.svg?v=cbfe536bec819c45b9b0b3a89d80d88df8940efa16a74add3db173b99a6e7fc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
