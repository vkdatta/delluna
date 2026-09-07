export const name="git-fork";
export const id="dl_803cc46c75c3424a838b";
export const url=new URL("../icons/git-fork.svg?v=3d4dbd24d31577e694db47938c9f4831fd0db1442b97fe493503086681c01ff4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
