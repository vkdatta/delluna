export const name="git-branch-bold";
export const id="dl_159a7240c8f1490a97d7";
export const url=new URL("../icons/git-branch-bold.svg?v=5c9ca5872ab0827070cce38db955a76f357f35a5e104ff1742205a0bb0f9b344",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
