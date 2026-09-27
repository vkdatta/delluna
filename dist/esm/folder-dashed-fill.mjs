export const name="folder-dashed-fill";
export const id="dl_e0608c02633349768a08";
export const url=new URL("../icons/folder-dashed-fill.svg?v=afa1b8dcf36b6ec5a46b41ee76e426e1369961b807d0d1f1431696f071cc4a04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
