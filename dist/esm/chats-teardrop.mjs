export const name="chats-teardrop";
export const id="dl_dde892b7d8e843ada4ae";
export const url=new URL("../icons/chats-teardrop.svg?v=d6194fc9dfb3ce3acf017fabd89ca358f44d638da6b778cb982850d7a2052efa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
