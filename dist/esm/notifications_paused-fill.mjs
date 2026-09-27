export const name="notifications_paused-fill";
export const id="dl_4ca7b0a0f1ab6ad65487";
export const url=new URL("../icons/notifications_paused-fill.svg?v=e6cfa5f339090d31f68431993da2496f8474661509c6f9b4969f827dee54b95c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
