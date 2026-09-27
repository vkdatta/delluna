export const name="attach_email";
export const id="dl_1b695c5bb36f5acce0fa";
export const url=new URL("../icons/attach_email.svg?v=2e32ea11c4ad393966a85679276daa7aa553e0d6f6ad023ef4a6d2790d436af6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
