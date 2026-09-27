export const name="lucid_1-bike";
export const id="dl_3d2a3a2ff05f4eed8394";
export const url=new URL("../icons/lucid_1-bike.svg?v=070314c7ab6850e3df90c4585beaa52dcb25503fb38dd65e62aaa39179307226",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
