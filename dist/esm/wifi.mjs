export const name="wifi";
export const id="dl_caffdfa6845244e6b086";
export const url=new URL("../icons/wifi.svg?v=cd78ccf12f0fc0a3ad8c0578fe042d8a570e6c8184d91caa61344c10cfcb2d5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
