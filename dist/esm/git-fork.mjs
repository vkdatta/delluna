export const name="git-fork";
export const id="dl_803cc46c75c3424a838b";
export const url=new URL("../icons/git-fork.svg?v=7ed36d5007a8114253ec5c148a7cb517a50c842fb1a40c9f4e1c83925bf14fc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
