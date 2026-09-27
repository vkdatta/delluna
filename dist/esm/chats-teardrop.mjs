export const name="chats-teardrop";
export const id="dl_dde892b7d8e843ada4ae";
export const url=new URL("../icons/chats-teardrop.svg?v=2c9eb598b9344b63ba0824698c4a95452ffbe071d3d05af1692e348b9dc18f74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
