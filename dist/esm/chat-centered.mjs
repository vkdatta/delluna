export const name="chat-centered";
export const id="dl_cbd0a7ac5d2a4168b828";
export const url=new URL("../icons/chat-centered.svg?v=d5b1180a2245a957926f3af185309b3706ed31edbfeee14eb62f37eb0785ee02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
