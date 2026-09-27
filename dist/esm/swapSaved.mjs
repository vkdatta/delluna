export const name="swapSaved";
export const id="dl_7179b66d249c52f9c867";
export const url=new URL("../icons/swapSaved.svg?v=1e7c15b62d1b569a8adcc045600675b6fbf48ea31167a745c890885f51d53ee2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
