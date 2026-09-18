export const name="emoji_objects";
export const id="dl_5d596848c2b34f2f9ef7";
export const url=new URL("../icons/emoji_objects.svg?v=657cda15fd9a119467410d89e6c6b57ff22d0e5903fa9664db2af6e1c48e2251",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
