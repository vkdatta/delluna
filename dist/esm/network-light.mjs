export const name="network-light";
export const id="dl_d0bb8c65b8704202957b";
export const url=new URL("../icons/network-light.svg?v=ff27f450a58bb83384aa17c80a7624f0bf4538e4aef1c225dc2caea54bec55bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
