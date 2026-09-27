export const name="h_mobiledata_badge-fill";
export const id="dl_35db41ea35d1ebbc20b2";
export const url=new URL("../icons/h_mobiledata_badge-fill.svg?v=5027e6540afe636b28ece2161a25bf41ac08be45376ce6d06f4a9eaa10805451",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
