export const name="av1-fill";
export const id="dl_8a765c26ae08052f745c";
export const url=new URL("../icons/av1-fill.svg?v=60772c2465eb39557063031b90360de1ed9acfe604b62fd11227304cd2d7f7f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
