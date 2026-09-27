export const name="mobile_sound-fill";
export const id="dl_be25dfa1118c3d763a3b";
export const url=new URL("../icons/mobile_sound-fill.svg?v=93e0125b7dde14ae8e022549aa86ad8422e869fbddfbc53727d716cb30b18c74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
