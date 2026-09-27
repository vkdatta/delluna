export const name="4g_mobiledata_badge";
export const id="dl_e548c58a928d53b377d4";
export const url=new URL("../icons/4g_mobiledata_badge.svg?v=22f6f6c694b4b8ccc83b177fb52b7102fc35f37f491ce26386bfee2ed17125b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
