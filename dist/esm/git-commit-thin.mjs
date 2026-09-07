export const name="git-commit-thin";
export const id="dl_2ed45765c1414acb9191";
export const url=new URL("../icons/git-commit-thin.svg?v=e75837b4da71d25591519d24aeb621deca3c8edd5420ba3125e03f186b640acb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
