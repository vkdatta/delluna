export const name="selection-all";
export const id="dl_2c5bd119c9efab6b973a";
export const url=new URL("../icons/selection-all.svg?v=a8136139c8fd6ab41a2700a17c608f15ab03577580277889c4cbcb87ca6c33dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
