export const name="git-fork-duotone";
export const id="dl_d7beb6fc5c1a48a2afdd";
export const url=new URL("../icons/git-fork-duotone.svg?v=02d9a6a01c8588bd3e51b676071a1e4a9b66c80e73be11ac6e2e8db1d820a31b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
