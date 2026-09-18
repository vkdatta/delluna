export const name="call_quality";
export const id="dl_796128fa6d454a438138";
export const url=new URL("../icons/call_quality.svg?v=79c82d73dff893d6b7c06d30938ff963758fddb0128d30b1109095ef92638693",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
