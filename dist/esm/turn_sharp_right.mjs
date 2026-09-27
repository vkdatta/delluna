export const name="turn_sharp_right";
export const id="dl_ae380eb4311f4a72c7cd";
export const url=new URL("../icons/turn_sharp_right.svg?v=312057dd3e282cdf441102c9fef57910a328f33892f02f42ba2ee389e3bbada6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
