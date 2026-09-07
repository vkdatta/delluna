export const name="chat-text";
export const id="dl_2c4412ea4b4b431ba17d";
export const url=new URL("../icons/chat-text.svg?v=efdb68b49cb030dcc6d04abf6f4e9368a0a9e7870d0145e62badcc99e58ca288",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
