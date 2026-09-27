export const name="person_raised_hand";
export const id="dl_72474f2b673dbe6958ea";
export const url=new URL("../icons/person_raised_hand.svg?v=c8efb66b94a0d0feffccb2c4b03a96972db99389066ab1f31e22f958b2bc6ba1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
