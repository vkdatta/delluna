export const name="snapchat-logo-light";
export const id="dl_07667511b1bd7eb86bee";
export const url=new URL("../icons/snapchat-logo-light.svg?v=de932172b422cf13661690373042e5096c0028c4012c417e2b98de20074e280a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
