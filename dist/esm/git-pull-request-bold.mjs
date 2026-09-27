export const name="git-pull-request-bold";
export const id="dl_c6b04b7a0087499c8ddf";
export const url=new URL("../icons/git-pull-request-bold.svg?v=41c913fb7ef93dbf5430e209f38e45e0369b4bb9956b2dc16bb859c402f069d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
