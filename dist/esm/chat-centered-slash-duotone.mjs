export const name="chat-centered-slash-duotone";
export const id="dl_300705eab54645e8bf41";
export const url=new URL("../icons/chat-centered-slash-duotone.svg?v=d00049c50c40c5ae85db70f5cb199338af5bab8ed3f89de8f47109e890f05a46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
