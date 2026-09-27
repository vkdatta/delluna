export const name="4g_plus_mobiledata-fill";
export const id="dl_750f0a6c0032555eabe0";
export const url=new URL("../icons/4g_plus_mobiledata-fill.svg?v=cadb52988268808d04253fdcaf5d598e4682d154d5334cf6f9d62f0da4c110ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
