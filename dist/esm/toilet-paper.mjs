export const name="toilet-paper";
export const id="dl_442559f1acb48fc84ef1";
export const url=new URL("../icons/toilet-paper.svg?v=98f1442d2a3193afac078d114e4e6aeb64fc199f7243d3a810959dba0ec75c6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
