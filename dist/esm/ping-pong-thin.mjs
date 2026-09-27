export const name="ping-pong-thin";
export const id="dl_320153766cfb41da92f1";
export const url=new URL("../icons/ping-pong-thin.svg?v=6bcdfdba36374d22c0994a545ede1bcb917e2c2914a214e99688ba0de4aa5170",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
