export const name="turn_slight_right-fill";
export const id="dl_71555e79e86d5fa6ad7d";
export const url=new URL("../icons/turn_slight_right-fill.svg?v=40fa792486e342ab8f77a98129f87fbb1f6976f15d00dcd427859c1f765ddf4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
