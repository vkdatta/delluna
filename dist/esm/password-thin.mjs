export const name="password-thin";
export const id="dl_ef016ff9e47743c39845";
export const url=new URL("../icons/password-thin.svg?v=ec2d405f11845d05635983b2a7f90528c22199aeb63fa6ebe58b225cbf1413a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
