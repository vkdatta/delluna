export const name="light_group_2-fill";
export const id="dl_a5620d91f660035db713";
export const url=new URL("../icons/light_group_2-fill.svg?v=b59410c2782675fdb1ca16200db3c222a4800857ccef12faf0b75e24cf4c5dbc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
