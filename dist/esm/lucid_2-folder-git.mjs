export const name="lucid_2-folder-git";
export const id="dl_1ef330e1a14a4ada9581";
export const url=new URL("../icons/lucid_2-folder-git.svg?v=5be73f426e67658c9b6839f536df6214acb3e99c29c87ca7bce75ebb8b7d118a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
