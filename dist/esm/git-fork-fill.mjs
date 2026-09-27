export const name="git-fork-fill";
export const id="dl_5e3bd7126c6449c49ebe";
export const url=new URL("../icons/git-fork-fill.svg?v=e73d34ba457379d96f2e86314a6e82c43e89c7e69a152310d368133b482b3ec4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
