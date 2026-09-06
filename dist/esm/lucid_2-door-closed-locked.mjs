export const name="lucid_2-door-closed-locked";
export const id="dl_8a7aeb10189249758321";
export const url=new URL("../icons/lucid_2-door-closed-locked.svg?v=0ffd65c3e52441117e212783c1ec9db0ed4328325532f6b2975e0ea035de570b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
