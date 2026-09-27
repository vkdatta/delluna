export const name="lucid_1-cable";
export const id="dl_328a82303a714ac0892c";
export const url=new URL("../icons/lucid_1-cable.svg?v=4a4eabefabedbcff4f2f1f3eda141a84c24da29352d77719b99d132352179768",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
