export const name="git-commit-fill";
export const id="dl_2b3af789c1b54430bbd1";
export const url=new URL("../icons/git-commit-fill.svg?v=93d24086c702292abb105b79e98210cb4f7ab150fbf5259e7aeb856b74fd4084",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
