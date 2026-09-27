export const name="private_connectivity-fill";
export const id="dl_99f4b8364eeb88990268";
export const url=new URL("../icons/private_connectivity-fill.svg?v=1595a3e9d2a2f272366216d79e231648d153ad2b35dfc9df2a0db1c003a15c54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
