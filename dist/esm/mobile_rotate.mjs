export const name="mobile_rotate";
export const id="dl_17cf60835fc54fa6b71a";
export const url=new URL("../icons/mobile_rotate.svg?v=ad3a928361c80530e7abe977a3ff9e62351dbbc17e435d815c09328e299b52eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
