export const name="popcorn-fill";
export const id="dl_9742603734874b2aa762";
export const url=new URL("../icons/popcorn-fill.svg?v=468568cb76e58eba452c7b857f06acb67873ece54f130869b3e14380b4100b60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
