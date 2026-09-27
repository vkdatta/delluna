export const name="chat-text";
export const id="dl_2c4412ea4b4b431ba17d";
export const url=new URL("../icons/chat-text.svg?v=6c5176551df21ec3c95fcd10a77055c03baeedcd6aef4df1f162dc5dd7e9f5d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
