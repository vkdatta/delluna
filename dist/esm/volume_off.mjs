export const name="volume_off";
export const id="dl_7b5ed9ee3a9ba98f1d91";
export const url=new URL("../icons/volume_off.svg?v=8cec83b6f876f7bf1a5f5133e29081d3e2a2124a8f23b59f3b3f250499e2251d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
