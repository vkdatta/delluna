export const name="stop-duotone";
export const id="dl_19e7974a1c10cda4a9f0";
export const url=new URL("../icons/stop-duotone.svg?v=fc65545ac95514f80c11888bc2878edd6b90eef2b05b68a0fb4a13897308ef0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
