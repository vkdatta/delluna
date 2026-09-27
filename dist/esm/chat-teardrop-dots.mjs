export const name="chat-teardrop-dots";
export const id="dl_6f520e0401274052b34a";
export const url=new URL("../icons/chat-teardrop-dots.svg?v=6ff57e2f699262365027fea92ad6402a58752865fcb4619875c9e81b6527d29b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
