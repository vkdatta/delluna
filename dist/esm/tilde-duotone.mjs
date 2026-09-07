export const name="tilde-duotone";
export const id="dl_e654f5feb1e147549034";
export const url=new URL("../icons/T/tilde-duotone.svg?v=a2ac9df39b1449f2d571fcf2e44b3de4f63fc8a721fafe5a5a59ebf09f95d9ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
