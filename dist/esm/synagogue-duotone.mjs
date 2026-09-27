export const name="synagogue-duotone";
export const id="dl_3716d56c8c3e29dbd339";
export const url=new URL("../icons/synagogue-duotone.svg?v=b0be1af6ef88df0d38667573b932abcfaca8854211d6b11390f91078d0836e92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
