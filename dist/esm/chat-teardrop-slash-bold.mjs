export const name="chat-teardrop-slash-bold";
export const id="dl_0ca17d6116b24bac96e5";
export const url=new URL("../icons/chat-teardrop-slash-bold.svg?v=5ab3998e30e227416e599a0192b1693bc467b3f2b32b6c384b1ccab7e6b2150c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
