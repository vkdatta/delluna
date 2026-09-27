export const name="notifications_unread";
export const id="dl_de0eb0916f09a6c1f4ca";
export const url=new URL("../icons/notifications_unread.svg?v=94111b4c5b53f3c0d93544ec6f5160543589ac7d78115bdac4fe2ebd5b32d1a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
