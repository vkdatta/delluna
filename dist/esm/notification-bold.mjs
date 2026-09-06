export const name="notification-bold";
export const id="dl_bbcbc790b7c44c7ba15f";
export const url=new URL("../icons/notification-bold.svg?v=3a45dc8d8911f48462097ec283f4d9f570da08ccb62acb1dd7d0d5743b8ae663",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
