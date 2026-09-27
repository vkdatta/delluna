export const name="user-switch-light";
export const id="dl_1c47aae2cd77313d7756";
export const url=new URL("../icons/user-switch-light.svg?v=7a31835b87a2fcbfb151c1b78b526f1bcb842f33be8b8d156c5b8929b669877f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
