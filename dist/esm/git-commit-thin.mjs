export const name="git-commit-thin";
export const id="dl_2ed45765c1414acb9191";
export const url=new URL("../icons/git-commit-thin.svg?v=0f61422a45d6e84f6dc05930b730dfa0dcd5b5412c3c6f84c52895d5d8f6ad5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
