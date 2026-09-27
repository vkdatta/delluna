export const name="lucid_1-barrel";
export const id="dl_d795478f848b4242bef5";
export const url=new URL("../icons/lucid_1-barrel.svg?v=a8d400cd36f0ec820404a899bc1f369cd9160a6ed87ea16dad46247e04a642e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
