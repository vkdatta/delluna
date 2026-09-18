export const name="mist-fill";
export const id="dl_cae3ad852a6c4d339d87";
export const url=new URL("../icons/mist-fill.svg?v=a45515bb9844fd09e1f34a020b6c5e21ec9aa37e99facbfbd739d3bcffc48743",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
