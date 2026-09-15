export const name="dock_to_left-fill";
export const id="dl_614919d3da604f8292a0";
export const url=new URL("../icons/D/dock_to_left-fill.svg?v=0655254b22cddd74064fd79da34975d9745fc3fc3afb1e2489871859ae188687",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
