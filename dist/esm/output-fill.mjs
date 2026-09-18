export const name="output-fill";
export const id="dl_4eb35d21e6d74d6f92bb";
export const url=new URL("../icons/O/output-fill.svg?v=06bfff88c94a127119d5f687f3ef251bf8a84b33bf06313b251f7804c2170d34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
