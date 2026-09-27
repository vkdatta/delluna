export const name="4g_plus_mobiledata";
export const id="dl_79300b63a833c2ad6ac6";
export const url=new URL("../icons/4g_plus_mobiledata.svg?v=cadb52988268808d04253fdcaf5d598e4682d154d5334cf6f9d62f0da4c110ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
