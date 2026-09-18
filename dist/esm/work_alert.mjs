export const name="work_alert";
export const id="dl_589193d4454f4509b18f";
export const url=new URL("../icons/work_alert.svg?v=527ce34474a311c3c063c4129c6b76f2f2b352cea8333fcab573b296ff9508c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
