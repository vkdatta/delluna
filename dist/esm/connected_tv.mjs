export const name="connected_tv";
export const id="dl_32c3b42b4fa891996041";
export const url=new URL("../icons/connected_tv.svg?v=a941e3672293042f903b9783632e622bd9f231e8c4412480889f11e1cf0d2ed9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
