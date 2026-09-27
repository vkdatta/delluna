export const name="power-thin";
export const id="dl_aa521b10a0b44eb5b93c";
export const url=new URL("../icons/power-thin.svg?v=7532a7595dbed515abf843008e70f3f47272ca206e238a71640f81c16c707839",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
