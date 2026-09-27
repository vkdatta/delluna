export const name="mark_email_unread-fill";
export const id="dl_17e1ffe65c8fba6692d5";
export const url=new URL("../icons/mark_email_unread-fill.svg?v=65ee851d714d5590978b1a20cd37d963755b2d9b2e5d16e567ed7487d5f7fa55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
