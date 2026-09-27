export const name="face-mask";
export const id="dl_cc9bdbc2fcc44aafb8d7";
export const url=new URL("../icons/face-mask.svg?v=ca32d34872822a0ef2c2dc2cdc314f0810a54ce11180347a7c3f1144fd5ecf3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
