export const name="dvr";
export const id="dl_b4f2084ae6cd8102b6d6";
export const url=new URL("../icons/dvr.svg?v=b396305a5bca3f5a5abd841e6abe16f3f0d56eecce54969b38370395323d6c1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
