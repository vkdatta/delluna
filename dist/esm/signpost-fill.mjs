export const name="signpost-fill";
export const id="dl_660296d6cc9040b1149c";
export const url=new URL("../icons/signpost-fill.svg?v=93316ba653ecff7e74a91a917a22479e815678cb2e5e70e2785a06de932408f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
