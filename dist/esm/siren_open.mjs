export const name="siren_open";
export const id="dl_5f3e0305819fff8ab9e3";
export const url=new URL("../icons/siren_open.svg?v=2c19a7b4e79ccde82f125c1a36d128086d2914d8b90d43d75c12df472e8f0a54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
