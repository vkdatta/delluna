export const name="mailbox";
export const id="dl_69406666524b4875b0ac";
export const url=new URL("../icons/mailbox.svg?v=3f5e0f5c5ba99db9a84b6136168e79868a0bf991e0d62fbe49ad531451219585",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
