export const name="chat-text";
export const id="dl_2c4412ea4b4b431ba17d";
export const url=new URL("../icons/chat-text.svg?v=197e5aae3edc878147e3f04e478288826cd79883930a17aef6c2fdca616edef3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
