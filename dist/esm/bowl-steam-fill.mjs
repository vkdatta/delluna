export const name="bowl-steam-fill";
export const id="dl_a933438586fd45778d16";
export const url=new URL("../icons/bowl-steam-fill.svg?v=f1e0085df89dfa1930e503357b21a9165ddce6a336062ebeec3eaedb85bfe34a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
