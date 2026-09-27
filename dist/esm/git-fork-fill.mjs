export const name="git-fork-fill";
export const id="dl_5e3bd7126c6449c49ebe";
export const url=new URL("../icons/git-fork-fill.svg?v=57718843feda7c96dd7421ba9f4160b55f54ae2bfdf666b344d9616fd27581ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
