export const name="git-commit-fill";
export const id="dl_2b3af789c1b54430bbd1";
export const url=new URL("../icons/git-commit-fill.svg?v=baf6a23fd3b3edf0bdd51a1bc65a90552ecf529f227ee2561d32d688a164eb93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
