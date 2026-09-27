export const name="chat-circle-duotone";
export const id="dl_3a646999ae6b46e4ab6c";
export const url=new URL("../icons/chat-circle-duotone.svg?v=eccea2f092ac67eebe732fd3e53eebf2b2fb55a47ad6b1550f970d2414bc0779",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
