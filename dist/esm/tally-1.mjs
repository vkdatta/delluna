export const name="tally-1";
export const id="dl_4d5039e8d19e4d4db50c";
export const url=new URL("../icons/tally-1.svg?v=6e517f107c7f5de5cbbdba92a1e9749317365c7cce5e3a3816bc02ff3e543877",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
