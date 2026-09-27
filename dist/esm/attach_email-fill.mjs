export const name="attach_email-fill";
export const id="dl_81c8f22b91074bcbdde8";
export const url=new URL("../icons/attach_email-fill.svg?v=e54197a7bf451c7db07a1665f4f1d073e8266d1e058bd223cc83efd0454fb118",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
