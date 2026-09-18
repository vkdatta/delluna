export const name="g_mobiledata_badge";
export const id="dl_c4ed3e47c0f84acc9dd8";
export const url=new URL("../icons/g_mobiledata_badge.svg?v=173e74227960318b9850f7d46c090827a5f153b08ad6cb2dd51a5e581a1e23ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
