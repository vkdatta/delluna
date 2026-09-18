export const name="hearing_aid_left";
export const id="dl_56618b75d0f84f64b694";
export const url=new URL("../icons/hearing_aid_left.svg?v=17f7eaa3c6e760ba938a9bd9acb4d6b811e3a16e7e8a12b9f7383e127022e0eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
