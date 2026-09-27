export const name="smb_share-fill";
export const id="dl_6f1ea8a8978b2d3f4f67";
export const url=new URL("../icons/smb_share-fill.svg?v=22d4825b25289af314880ccc5aaf158490b737de2c0f71a9c45dafa3461f8c74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
