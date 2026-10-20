export const name="replace-all";
export const id="dl_679ad55e35ba436a9015";
export const url=new URL("../icons/replace-all.svg?v=330257afcfec9e237c0b9ec24c0297dc8bd1f41a4ff068dfac28a8beef2548db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
