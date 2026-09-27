export const name="group_work";
export const id="dl_69d1547cb5f28e094528";
export const url=new URL("../icons/group_work.svg?v=7acfb3ce86d9688740e9746b2a2f45d2540f3caf2979a5857e13dca1f9f6115e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
