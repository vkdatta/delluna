export const name="fmd_bad-fill";
export const id="dl_c2a1575b69ac80e649ff";
export const url=new URL("../icons/fmd_bad-fill.svg?v=ffe798a477200d24da1a003a4b8445e91962e7b69e8f7e1b421acfc70a8b9ef5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
