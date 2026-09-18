export const name="live_tv-fill";
export const id="dl_c9064b8c41c941a28ae4";
export const url=new URL("../icons/live_tv-fill.svg?v=91748ef13636b4873a1c0c8ebfa02ad21342b2ed8a24cdbba3161b4aa18586d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
