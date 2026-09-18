export const name="notifications-fill";
export const id="dl_107f931aa580477f9212";
export const url=new URL("../icons/N/notifications-fill.svg?v=a849979a17c779d76bcc53ce56c8a91e7c3953004f4b888bceb0b73a0f59daa5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
