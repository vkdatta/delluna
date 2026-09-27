export const name="chat-centered-slash";
export const id="dl_42ef453233cf4de19c40";
export const url=new URL("../icons/chat-centered-slash.svg?v=d1576e378212da9267bc0f2598f7bbf788421a909a839d42656f820fe07b1918",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
