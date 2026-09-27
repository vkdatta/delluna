export const name="night_sight_auto_off";
export const id="dl_2dcd3178be6042c5905c";
export const url=new URL("../icons/night_sight_auto_off.svg?v=568ebabcf61f422cfc485084b5057aa2181481138a77850d6a3347680f9a9803",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
