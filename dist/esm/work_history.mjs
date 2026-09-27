export const name="work_history";
export const id="dl_bb54cbb18dae67b3e52f";
export const url=new URL("../icons/work_history.svg?v=220e1d4b434e8a5786159e8aa1155c9d619edc90c074856931468a8c58112155",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
