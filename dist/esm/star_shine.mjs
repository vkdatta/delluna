export const name="star_shine";
export const id="dl_aaa76954ca9cdbac8149";
export const url=new URL("../icons/star_shine.svg?v=41729267dd0f952e339120bbd3daa37f592417cb0049ffd1ee81b9285783436f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
