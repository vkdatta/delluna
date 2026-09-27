export const name="solar-roof-thin";
export const id="dl_d83304efca47aa14eec0";
export const url=new URL("../icons/solar-roof-thin.svg?v=7dc3650822657e50b16d7a2da20fcade911f37debbfa7f27f07e12c5730142fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
