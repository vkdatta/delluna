export const name="chats-teardrop";
export const id="dl_dde892b7d8e843ada4ae";
export const url=new URL("../icons/chats-teardrop.svg?v=7396ca895b3534f1081d7a0e948708ca0ed988568ad227d72b51c3d5ad581fe9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
