export const name="dropper_eye-fill";
export const id="dl_d77c91b62b36493a9db6";
export const url=new URL("../icons/D/dropper_eye-fill.svg?v=54675467b8b764f837f1849b3704b97edd5527562485cf1be2b0985c8b3b4182",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
