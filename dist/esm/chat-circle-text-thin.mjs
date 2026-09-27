export const name="chat-circle-text-thin";
export const id="dl_0b4d9dbcee3a47e39a8a";
export const url=new URL("../icons/chat-circle-text-thin.svg?v=8bedc2200fd05252a086fc61975fa832b3e19104584ce9e9b78cba609c57c9a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
