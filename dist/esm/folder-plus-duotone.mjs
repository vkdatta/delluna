export const name="folder-plus-duotone";
export const id="dl_fd2042524b284af08c98";
export const url=new URL("../icons/folder-plus-duotone.svg?v=96c7cf1c1a120c46d017b8b3196b6ba3c93515f7ed85fbf2422c00ea6903eaf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
