export const name="clock-clockwise-fill";
export const id="dl_cbb7810e43334fdcb4a2";
export const url=new URL("../icons/clock-clockwise-fill.svg?v=54d725a50ae55c7228baedb4f4a10f33c67037597faa4ae5fd0a4724d9196e68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
