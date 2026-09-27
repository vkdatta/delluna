export const name="chat_bubble_off-fill";
export const id="dl_fbb6e23d804e49fceef9";
export const url=new URL("../icons/chat_bubble_off-fill.svg?v=c7d38519cef4f1ba0ba1c93a67d324616bec0983e6d7b81351132166f40703cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
