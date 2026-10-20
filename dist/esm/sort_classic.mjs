export const name="sort_classic";
export const id="dl_efe297861c9e45f5b7d9";
export const url=new URL("../icons/icons-svg/sort_classic.svg?v=96ed21217f40da564343da530c48871aaad82be63e9bece10520ad76f0d01715",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
