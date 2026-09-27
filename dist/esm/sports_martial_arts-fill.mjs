export const name="sports_martial_arts-fill";
export const id="dl_319ccae4fc4e669b689e";
export const url=new URL("../icons/sports_martial_arts-fill.svg?v=8bf242e916bbfdc2bd0b51e95135f157ebe9775caa15d46acbaf636e4d5e0dba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
