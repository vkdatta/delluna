export const name="mail_off-fill";
export const id="dl_4b3a7f8a1a6d2b0a70b8";
export const url=new URL("../icons/mail_off-fill.svg?v=4eb0bb14757fa7f71907f90209bbd037c20ba1017c7aa6fbee67c37f26223170",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
