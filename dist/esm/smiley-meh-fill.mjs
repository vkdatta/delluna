export const name="smiley-meh-fill";
export const id="dl_a0e43a0ef237a90ff797";
export const url=new URL("../icons/smiley-meh-fill.svg?v=ab23844dde8fc2406d80b900f822e74cac13f07883c01b770e67df7591e18c8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
