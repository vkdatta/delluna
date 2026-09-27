export const name="folder-dashed-fill";
export const id="dl_e0608c02633349768a08";
export const url=new URL("../icons/folder-dashed-fill.svg?v=c42c884b9b7cff5b557c5e9efe1141418a5aed87365c21fd9aee711462195244",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
