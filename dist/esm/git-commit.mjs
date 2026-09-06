export const name="git-commit";
export const id="dl_17be6ce7e0b146a0ae1c";
export const url=new URL("../icons/git-commit.svg?v=331995ac14c871088c427cedd622d96481e63d69c59108013b10b3d7834ed35d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
