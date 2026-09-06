export const name="highlighter-fill";
export const id="dl_01a36db6e2c64e79a92a";
export const url=new URL("../icons/highlighter-fill.svg?v=1e8e0ca79978285df0292f5f7a3ee7840b6a011cb3c8a32ac9744178a7fc407c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
