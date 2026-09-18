export const name="lte_plus_mobiledata_badge-fill";
export const id="dl_90c3cce0560247e196fb";
export const url=new URL("../icons/lte_plus_mobiledata_badge-fill.svg?v=60379fdc97d80d42f80fac987c3ee1452b80467b983ea90a44d3f71c98267af1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
