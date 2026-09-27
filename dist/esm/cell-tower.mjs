export const name="cell-tower";
export const id="dl_dba7d3ebad504c6b970e";
export const url=new URL("../icons/cell-tower.svg?v=10fdec2363189f35cf6d6d52910e870cf138c5aacb4f893647b65abe0d4e7f50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
