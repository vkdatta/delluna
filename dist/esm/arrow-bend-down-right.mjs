export const name="arrow-bend-down-right";
export const id="dl_a93cb32b08ce40e9ac7e";
export const url=new URL("../icons/arrow-bend-down-right.svg?v=6270f47ba03e4a0e3028a8fa46b8106635082bc8a1d646a81f3f84cd6bd57888",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
