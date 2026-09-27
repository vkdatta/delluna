export const name="remove_from_queue";
export const id="dl_a4f741b0f417f361749d";
export const url=new URL("../icons/remove_from_queue.svg?v=aadb8c2881060e8fb089601b12bea4a0c29f2f0359bd8606a7e7caf6d265e45b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
