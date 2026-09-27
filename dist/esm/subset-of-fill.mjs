export const name="subset-of-fill";
export const id="dl_ccffd81777a441058a03";
export const url=new URL("../icons/subset-of-fill.svg?v=8c0a7e169730c9b55636d857b33c2ce29b5b24c82536801e5b15354913309b38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
