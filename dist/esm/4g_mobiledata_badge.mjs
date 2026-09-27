export const name="4g_mobiledata_badge";
export const id="dl_2d4af54e805126a176a0";
export const url=new URL("../icons/4g_mobiledata_badge.svg?v=b6336b49ef9eefa5ddd9c8be017865e4395e4ebada52b8033b1f056d780f8828",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
