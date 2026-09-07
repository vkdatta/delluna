export const name="user-circle-plus";
export const id="dl_c6f8e2a97cd042eaa99e";
export const url=new URL("../icons/U/user-circle-plus.svg?v=21d922641938f19ca94309c5185675aa6a9b0058020be9b40231777078e0f0bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
