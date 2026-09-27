export const name="add_call-fill";
export const id="dl_8bca28a1b3599d25514e";
export const url=new URL("../icons/add_call-fill.svg?v=742632633c8cc8e9f75fa9c15be6d9ecd08d865081b2d890928a38d50657a475",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
