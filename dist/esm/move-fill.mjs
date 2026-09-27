export const name="move-fill";
export const id="dl_792fc35bf1f44de6b185";
export const url=new URL("../icons/move-fill.svg?v=f0d0462d58df78907432a7eea6aa12d1e0a8f3fa81235ab71c71473ac552961e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
