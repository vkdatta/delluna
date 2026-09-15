export const name="enterprise";
export const id="dl_c5799283c58f408d9278";
export const url=new URL("../icons/E/enterprise.svg?v=4aefa184a5657b1a106354e8d8157156428bd96250d87b3b7782644a3ed54ce2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
