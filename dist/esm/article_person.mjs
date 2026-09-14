export const name="article_person";
export const id="dl_1920c505592b4c9eac58";
export const url=new URL("../icons/A/article_person.svg?v=3a56b6017fe5c068600582f430dcfd1113c051a28dd5d06c9582698ef9bd16f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
