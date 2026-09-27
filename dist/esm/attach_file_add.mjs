export const name="attach_file_add";
export const id="dl_79da4b93fc974108c257";
export const url=new URL("../icons/attach_file_add.svg?v=d00ac814439837faf28f21d9480f84c85915e62db1bb5a2dd6d1454bdeca3b84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
