export const name="phone-pause-thin";
export const id="dl_e3c68b642c284001aa34";
export const url=new URL("../icons/phone-pause-thin.svg?v=4538bf17272d62ecba8887f95e953ac8d32f00200a835d51ae0eaa5b8a161710",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
