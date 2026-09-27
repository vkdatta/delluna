export const name="heartbeat-bold";
export const id="dl_79e04e960a3e4da9b11b";
export const url=new URL("../icons/heartbeat-bold.svg?v=b430a00c19760475059f67271992b42085ed1d8d04330c1d879337a06cf6ba99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
