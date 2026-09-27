export const name="cruelty_free-fill";
export const id="dl_b3fb3d86f9666d7e0ff2";
export const url=new URL("../icons/cruelty_free-fill.svg?v=2560a184592f43420749c066f34338c3e928e27029a06e6a45381abedf996bac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
