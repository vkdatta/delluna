export const name="chats-light";
export const id="dl_81e4dda37ee9434dacac";
export const url=new URL("../icons/chats-light.svg?v=936b4418e1b53a857e5e30b02037cde7dba69bec12df535832458f9baafb51db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
