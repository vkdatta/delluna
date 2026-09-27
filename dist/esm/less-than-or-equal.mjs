export const name="less-than-or-equal";
export const id="dl_d5c8f2a10fa24f5c803a";
export const url=new URL("../icons/less-than-or-equal.svg?v=aefa15e1f0e66f4748446a62bc0ed6f0f27cb975886bf8dcc2c5703b65c99344",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
