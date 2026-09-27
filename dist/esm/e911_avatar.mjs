export const name="e911_avatar";
export const id="dl_1a6c0329da03b24c0b94";
export const url=new URL("../icons/e911_avatar.svg?v=0730d5f97dea488ff3b8cdaf7a5bf5cc084e618931556af6d2887bc0e2ddf11e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
