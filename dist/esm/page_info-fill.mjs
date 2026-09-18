export const name="page_info-fill";
export const id="dl_dc767fc24c2b47a794f1";
export const url=new URL("../icons/page_info-fill.svg?v=0795f962e30c16191b8c1e03de94c4538e427dec8102fcac902bd3b53b151ffa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
