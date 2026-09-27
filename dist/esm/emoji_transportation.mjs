export const name="emoji_transportation";
export const id="dl_9d9eed02207868f4eacb";
export const url=new URL("../icons/emoji_transportation.svg?v=6f988ad3c4ab2811d291e0c055c124d9621150ca4518576392da28a8b011b73e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
