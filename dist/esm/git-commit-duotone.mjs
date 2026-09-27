export const name="git-commit-duotone";
export const id="dl_993706cd275d498d90b2";
export const url=new URL("../icons/git-commit-duotone.svg?v=5e790386622f8a8de32862fe1f73cf17a2bf35459e6599623368187d397bb298",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
