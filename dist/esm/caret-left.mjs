export const name="caret-left";
export const id="dl_ee247daf147e4fc9803a";
export const url=new URL("../icons/caret-left.svg?v=6fbc9a632d3fd7e1c7cbd41c6682e0a4125e61f16504f484e4d926a3588b73d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
