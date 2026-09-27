export const name="3g_mobiledata_badge";
export const id="dl_6fee9aa29b567406dbec";
export const url=new URL("../icons/3g_mobiledata_badge.svg?v=b4570488a1872685eafe31feadd5d47165b777ee9c3bc35d38cb6f6ed4ab5187",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
