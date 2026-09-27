export const name="call_log";
export const id="dl_4ba81786a642b143334b";
export const url=new URL("../icons/call_log.svg?v=f28b4f7d8dcce0d2c7d782732a4fe1d5e52ac01a8fbcce3d0c326f64f3a4b788",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
