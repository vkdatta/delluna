export const name="bigtop_updates-fill";
export const id="dl_85b4956498f363b14900";
export const url=new URL("../icons/bigtop_updates-fill.svg?v=b49d26f0199670a2ba03c03b6fd1a74dd828014c68b2f9909e1b7d6766fd7b95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
