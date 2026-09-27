export const name="chat-teardrop-text-bold";
export const id="dl_fa1c2bd060314f8fbf31";
export const url=new URL("../icons/chat-teardrop-text-bold.svg?v=c77706f7ba20c1cd146c476cbdce2f2a5354eb7738124970072eebf28020f83e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
