export const name="snooze-fill";
export const id="dl_e96db7446416c23aaa31";
export const url=new URL("../icons/snooze-fill.svg?v=65f54c64501ff97f2ae953646554e711dba3b8eb7c3dfe8f87c0e1115b74f1c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
