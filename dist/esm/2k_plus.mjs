export const name="2k_plus";
export const id="dl_c40bb6b522644a01da63";
export const url=new URL("../icons/2k_plus.svg?v=4fe579029d6fb3cb1a157bd2db22a8f90593fbb7150052b0fc6a6d5f5c0481d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
