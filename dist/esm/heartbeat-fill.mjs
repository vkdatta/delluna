export const name="heartbeat-fill";
export const id="dl_4b5218f0a90f4350a969";
export const url=new URL("../icons/heartbeat-fill.svg?v=ced993ae614b717a4177aeb0b49ff030636d9fcbf5f2912f7ede566afa6be89e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
