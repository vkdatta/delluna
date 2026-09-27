export const name="git-diff-light";
export const id="dl_7002360bbd0048a3a9b7";
export const url=new URL("../icons/git-diff-light.svg?v=1a465b680f1bde84bf69dc58228e0f72ba99c050bf8b6889d333ae688209a6d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
