export const name="git-fork";
export const id="dl_803cc46c75c3424a838b";
export const url=new URL("../icons/git-fork.svg?v=675caebe9f5bc09861f01f064748cc68ad62960af8d4690e696b002c11d5895f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
