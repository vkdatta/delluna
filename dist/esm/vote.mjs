export const name="vote";
export const id="dl_a02fcd238f0048e19fa7";
export const url=new URL("../icons/vote.svg?v=4618ae5d7de8df5eba20b11696521800d4a4cae3bfaeaba90df9bff0aaf7e7af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
