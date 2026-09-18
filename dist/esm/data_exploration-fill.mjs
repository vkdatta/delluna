export const name="data_exploration-fill";
export const id="dl_4b7f34b57aeb430685aa";
export const url=new URL("../icons/data_exploration-fill.svg?v=83d75263210b44eb33aac542837f6cfc4863233d3fb1835ced428e64601fb757",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
