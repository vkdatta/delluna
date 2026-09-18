export const name="match_word-fill";
export const id="dl_b1af04cacfd74404990b";
export const url=new URL("../icons/match_word-fill.svg?v=bcda7385143a27a8dab23fb39b16a7196c13937f0c0a2019fd01a9df3e315c07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
