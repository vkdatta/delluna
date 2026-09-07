export const name="xd";
export const id="dl_bcd69a86dc5947acbe6a";
export const url=new URL("../icons/all_60_named_svgs/xd.svg?v=95b6eff9efb08f407236526ea13c1533019977a4061da341a17f434b3d9c75b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
