export const name="chat-centered-slash";
export const id="dl_42ef453233cf4de19c40";
export const url=new URL("../icons/chat-centered-slash.svg?v=84fced52bad29123179c6b1644b3bb17659456386829cff51986f9bac4868a6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
