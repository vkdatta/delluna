export const name="lucid_3-rotate-cw-square";
export const id="dl_20595aec348b4b83848f";
export const url=new URL("../icons/lucid_3-rotate-cw-square.svg?v=5167a8ec9a550a63877d18f0bee5e6eb8d9bb2dfd6a015857a2090625cf04335",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
