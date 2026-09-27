export const name="tsunami-fill";
export const id="dl_eff491d6bf58d63a4623";
export const url=new URL("../icons/tsunami-fill.svg?v=ea67294a63f5a3873959504bf020e3b2a70f37d6c38536b187be99b74ec783b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
