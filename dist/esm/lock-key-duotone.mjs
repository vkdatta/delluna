export const name="lock-key-duotone";
export const id="dl_89822f7fd07a46a383be";
export const url=new URL("../icons/lock-key-duotone.svg?v=922bad31e818f3292839e44a50883f34fa72ba748ed8c624cee7dc5dbf8ca1ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
