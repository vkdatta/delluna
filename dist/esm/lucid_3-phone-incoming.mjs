export const name="lucid_3-phone-incoming";
export const id="dl_5c076400a4164babaf5e";
export const url=new URL("../icons/lucid_3-phone-incoming.svg?v=0ca0ac3d3f843e0988b794aae04898c23329b66981019a2e8dab24cb5a01050e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
