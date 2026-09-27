export const name="parking_meter-fill";
export const id="dl_5dad980ed65375e72757";
export const url=new URL("../icons/parking_meter-fill.svg?v=43b5eab5e5e86dff0edcc5ab19f7a8dfc172c1beb903d2a4311a416995810647",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
