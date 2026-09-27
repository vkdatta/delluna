export const name="chat-teardrop-slash-bold";
export const id="dl_0ca17d6116b24bac96e5";
export const url=new URL("../icons/chat-teardrop-slash-bold.svg?v=8eabf72721e3e5510ed2f4150a365bcc528ee1f8f7833fa6ce9d0dbef104888d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
