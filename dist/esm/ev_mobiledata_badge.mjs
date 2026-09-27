export const name="ev_mobiledata_badge";
export const id="dl_28b0eef7b727638ee6b3";
export const url=new URL("../icons/ev_mobiledata_badge.svg?v=62201a44245639e45069d6012cd329cbc9ffcc02f2ca49dfd5f656b8c04f2651",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
