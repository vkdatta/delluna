export const name="popcorn-bold";
export const id="dl_b4be4fae1fa748a18577";
export const url=new URL("../icons/popcorn-bold.svg?v=0c56c4b878afbf3095740c53e89f9afa5e5166ddeb307d250d00c5a44d7f5941",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
