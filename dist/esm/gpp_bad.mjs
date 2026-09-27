export const name="gpp_bad";
export const id="dl_ceb8f6b843e56e5f182e";
export const url=new URL("../icons/gpp_bad.svg?v=3ff553afe54437118d74beca33de9ad48a025c3f601bf9926042fced5c39bec9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
