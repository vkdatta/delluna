export const name="not_accessible-fill";
export const id="dl_87386ed2f4b3df060f7c";
export const url=new URL("../icons/not_accessible-fill.svg?v=77e1a73b5181794b3a3171a6da5619f7cc52f98652f6c55a4d5a2c2b4c644a52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
