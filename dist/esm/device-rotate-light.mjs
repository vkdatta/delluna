export const name="device-rotate-light";
export const id="dl_90f8583951424ad4a290";
export const url=new URL("../icons/device-rotate-light.svg?v=8a5bf66ed12aedfcb862fba9dd2e9dbc534a2862e0d6fd00552c70cc3861e9c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
