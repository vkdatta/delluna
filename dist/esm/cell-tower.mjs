export const name="cell-tower";
export const id="dl_dba7d3ebad504c6b970e";
export const url=new URL("../icons/cell-tower.svg?v=8ca1408e6c0de1b105b347270aad52aa4ece5e5388df8782db45e5734639c001",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
