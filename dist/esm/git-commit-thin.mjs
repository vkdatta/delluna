export const name="git-commit-thin";
export const id="dl_2ed45765c1414acb9191";
export const url=new URL("../icons/git-commit-thin.svg?v=bb9989a129eeb10c7495f67505751fe8941437085589fe71f0bcf8dbe9520403",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
