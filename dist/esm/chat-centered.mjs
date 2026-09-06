export const name="chat-centered";
export const id="dl_cbd0a7ac5d2a4168b828";
export const url=new URL("../icons/chat-centered.svg?v=38d64362afb4da5e029ffe0b995a3fe81a8f11a1447659f4dc0a1be5d329be38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
