export const name="lucid_2-list-plus";
export const id="dl_82920c97c54f4f78aeb5";
export const url=new URL("../icons/lucid_2-list-plus.svg?v=f129998901831c57aa894778a41dc551518026a818483b3b30ecda11904ee819",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
