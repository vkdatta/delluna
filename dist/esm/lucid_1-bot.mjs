export const name="lucid_1-bot";
export const id="dl_811361a8220844e7ba8c";
export const url=new URL("../icons/lucid_1-bot.svg?v=7229bf94f7ff40dbd21547ef52f23a843fe01ab8b0c44f576e195c46a4a095f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
