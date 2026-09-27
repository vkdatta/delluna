export const name="dice-three-duotone";
export const id="dl_4eb75f447f1b46529531";
export const url=new URL("../icons/dice-three-duotone.svg?v=a0fc94dbcdfdc2aeddea41a1c6fea160abceb8eeaba624925e6e20d58e7002eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
