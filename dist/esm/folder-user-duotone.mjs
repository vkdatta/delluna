export const name="folder-user-duotone";
export const id="dl_7cf191ca167e445eafff";
export const url=new URL("../icons/folder-user-duotone.svg?v=6b79fb7459c580dd36802fd0bf84c9eb7984b0903573074b2beea63e6253142c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
