export const name="mark_email_unread";
export const id="dl_4a16b14437ca7026f185";
export const url=new URL("../icons/mark_email_unread.svg?v=79561ade69f7b8540e84d75d5d38a0439eb3ad86f67a00d9147d3c481622246c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
