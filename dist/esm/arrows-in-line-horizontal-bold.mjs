export const name="arrows-in-line-horizontal-bold";
export const id="dl_e295e5518c0d4821a887";
export const url=new URL("../icons/arrows-in-line-horizontal-bold.svg?v=4802bc3be44af2abb7f78dca493374ef702c6784db24a4cfeddf6b344db90e68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
