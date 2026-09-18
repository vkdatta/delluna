export const name="sign_language";
export const id="dl_867900311aac4d81a5fa";
export const url=new URL("../icons/S/sign_language.svg?v=a099c62fef22d8032818748738d74c946ae0a24fa77ae1f4c5be53a23f3c6985",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
