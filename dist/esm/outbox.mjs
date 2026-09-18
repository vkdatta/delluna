export const name="outbox";
export const id="dl_e084731dce7b46779793";
export const url=new URL("../icons/outbox.svg?v=f7359a5f95585adb71ba2b8225f34c2a711166699b12c6f30022563101a01dcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
