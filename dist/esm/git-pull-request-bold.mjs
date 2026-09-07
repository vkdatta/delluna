export const name="git-pull-request-bold";
export const id="dl_c6b04b7a0087499c8ddf";
export const url=new URL("../icons/git-pull-request-bold.svg?v=e565818581af0fc40d3a9a7e8803f77d6fcaf9c5a042e991d4ded00a1a5df4a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
