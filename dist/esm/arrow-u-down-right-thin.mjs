export const name="arrow-u-down-right-thin";
export const id="dl_f4896bf3a24c4351a42c";
export const url=new URL("../icons/arrow-u-down-right-thin.svg?v=b317d57dec5b97fae31f207472e15c9f34af6602313f78361ddc9f3a23867c51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
