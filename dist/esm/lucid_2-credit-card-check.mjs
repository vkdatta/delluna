export const name="lucid_2-credit-card-check";
export const id="dl_6062cadcc9f04d34bf45";
export const url=new URL("../icons/lucid_2-credit-card-check.svg?v=e473a208699c25d961f190d98a087c19705d114667708133abc1a12f037d82f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
