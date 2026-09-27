export const name="south-fill";
export const id="dl_88f08887049484cdb77e";
export const url=new URL("../icons/south-fill.svg?v=8230e6db55c4bec557938fb07598b81de93551915137507be7e407ea1e5e71b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
