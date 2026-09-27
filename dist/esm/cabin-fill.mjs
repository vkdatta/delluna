export const name="cabin-fill";
export const id="dl_6d82e1b659c701d75d8c";
export const url=new URL("../icons/cabin-fill.svg?v=1da285e6bb82df7edf6d868fd1ffddba4faaf098402f864e976700140f688c15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
