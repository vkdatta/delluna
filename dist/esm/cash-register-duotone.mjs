export const name="cash-register-duotone";
export const id="dl_0e0d89f956454cbaa21b";
export const url=new URL("../icons/cash-register-duotone.svg?v=ff070feff7e014bfa38fea38945dcb86e12975ac80698f24adb703c064bfba3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
