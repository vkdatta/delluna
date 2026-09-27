export const name="hand-bold";
export const id="dl_033ee248b09d40b787d0";
export const url=new URL("../icons/hand-bold.svg?v=20886e7b6894341f23d614f0fc9d82b138b8e6cddde16004a877e73f5d272328",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
