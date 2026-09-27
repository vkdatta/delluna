export const name="arrows-down-up-fill";
export const id="dl_7267673964e74953b1cb";
export const url=new URL("../icons/arrows-down-up-fill.svg?v=4c8260a193c3446ba22237942f5b8f7f2885f2f7a733d743f515f46ba3b85b76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
