export const name="balloon";
export const id="dl_91eaf487d8364b109eb9";
export const url=new URL("../icons/balloon.svg?v=661cf56f4bd824e6d61be31cf042cd2b0f620ea5c25071ad1079e7c5b2c574b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
