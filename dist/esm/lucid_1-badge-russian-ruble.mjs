export const name="lucid_1-badge-russian-ruble";
export const id="dl_ad021f9314ed4189b150";
export const url=new URL("../icons/lucid_1-badge-russian-ruble.svg?v=c043ac1939930bf1d6378e45b2df2fdf7e77c52be9399b60e9591bdc341812c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
