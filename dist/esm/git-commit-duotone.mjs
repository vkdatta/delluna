export const name="git-commit-duotone";
export const id="dl_993706cd275d498d90b2";
export const url=new URL("../icons/git-commit-duotone.svg?v=5529b7aa252b9c667398ae4333e45a5779b7b57c9b6e58aa7576ac78e1315e7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
