export const name="paint-brush-household-duotone";
export const id="dl_a49556c6e0ea4723ae23";
export const url=new URL("../icons/paint-brush-household-duotone.svg?v=981e019e2c1cf6bf84383ec3bc73697be4085eb826ae5c843ea1157a5d5622d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
