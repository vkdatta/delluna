export const name="assistant_device";
export const id="dl_1b88db7d8b62ae90b532";
export const url=new URL("../icons/assistant_device.svg?v=2262bce4b3b3516ad0a75a244b2469faa4c9b33c190dba945c6bc4196146b9c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
