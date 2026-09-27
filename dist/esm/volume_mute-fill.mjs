export const name="volume_mute-fill";
export const id="dl_968ebfe059799770cbff";
export const url=new URL("../icons/volume_mute-fill.svg?v=180f9f840737c7d30ca6da2c840e70d2d028a4595a69138a30b46eb9f3591428",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
