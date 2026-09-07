export const name="lucid_2-git-branch-plus";
export const id="dl_7a351f6a22f2492a8149";
export const url=new URL("../icons/lucid_2-git-branch-plus.svg?v=8a7c62e8b45c25ed1d60e4472579365ccb48c354dc67ca15c0d335bc14c13288",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
