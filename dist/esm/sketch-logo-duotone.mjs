export const name="sketch-logo-duotone";
export const id="dl_f339d7fe13613d73f1bb";
export const url=new URL("../icons/sketch-logo-duotone.svg?v=f95861cda8d83392ce82b3ffe23bcc889558ed486c3ebd43576909e4daac704f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
