export const name="forward_5-fill";
export const id="dl_57dd67ff7b601f585603";
export const url=new URL("../icons/forward_5-fill.svg?v=8c9196486507a6155f41f0f9d9d11efbe9287850203b05686486cef66e61763d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
