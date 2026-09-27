export const name="queue_play_next";
export const id="dl_75af3aafdb9718232de9";
export const url=new URL("../icons/queue_play_next.svg?v=c3100d774c65baad66769f25bf18702a6eae7b716dfd1f56a63dcd3f1e581445",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
