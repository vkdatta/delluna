export const name="fire-simple-duotone";
export const id="dl_6c7f99a3c30846c9a0f3";
export const url=new URL("../icons/fire-simple-duotone.svg?v=59427a5646db13456e78ce3d574aeb4c3ee80e8ec0dcf0ce3f27e0bb989dce83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
