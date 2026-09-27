export const name="cloud-fog-thin";
export const id="dl_efbc83d5d8d34fa6acbb";
export const url=new URL("../icons/cloud-fog-thin.svg?v=768284759a96eff85af527983b2ab418eccea6cd1103e8a560a0a35da1c1664e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
