export const name="lucid_3-shovel";
export const id="dl_32d08c26fab64389b350";
export const url=new URL("../icons/lucid_3-shovel.svg?v=7a1571238fb9d1b8f1324f5c9d9a1c1d2f1e7c14d3ee831a35ad2628ffc537ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
