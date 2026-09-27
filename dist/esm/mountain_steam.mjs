export const name="mountain_steam";
export const id="dl_a58e208163e94208b680";
export const url=new URL("../icons/mountain_steam.svg?v=6d3b252f4fe3928a17171c52749e5e5c626068ad44cc0920ff3c07b7264c0bd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
