export const name="git-branch-light";
export const id="dl_d20d2712a4234fa58043";
export const url=new URL("../icons/git-branch-light.svg?v=888f20a4ddf86931c8d6fb406f5805586311b86e6629bacadb2a3fa678e8630f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
