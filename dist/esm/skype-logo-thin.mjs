export const name="skype-logo-thin";
export const id="dl_f0e4faca476ba8a77ecb";
export const url=new URL("../icons/skype-logo-thin.svg?v=ecb1613bd82ddf70f5057d892aa9fcda1c4f3fae1f502bb90a5a7fe6d66b1d69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
