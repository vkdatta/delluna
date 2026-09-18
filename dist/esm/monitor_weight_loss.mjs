export const name="monitor_weight_loss";
export const id="dl_9fb4f7ea3d004b9f87f8";
export const url=new URL("../icons/monitor_weight_loss.svg?v=7f03f0532888ba2ab9433734d1047dad4f7c72ffc505eebfe8cfa67bd6a31bef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
