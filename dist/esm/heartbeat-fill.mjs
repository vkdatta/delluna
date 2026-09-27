export const name="heartbeat-fill";
export const id="dl_4b5218f0a90f4350a969";
export const url=new URL("../icons/heartbeat-fill.svg?v=5611e7dcf9095b47cd984d2fb5b4c71fb82f077e2ae23a1475c31ac29e93604b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
