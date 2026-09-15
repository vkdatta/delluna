export const name="child_friendly-fill";
export const id="dl_4fee3e5704db48f78fe4";
export const url=new URL("../icons/C/child_friendly-fill.svg?v=9018b95bd5084df18aa24ce297f4eb932480b4f4f1c26d7a0e4db2353f44e7c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
