export const name="less-than-or-equal";
export const id="dl_d5c8f2a10fa24f5c803a";
export const url=new URL("../icons/less-than-or-equal.svg?v=aa470ab207959085eadaf86e44f39fac7a43d6e9dd5bf291590b4806a285fe50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
