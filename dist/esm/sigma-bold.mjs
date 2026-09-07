export const name="sigma-bold";
export const id="dl_93aa723ea1ef469da614";
export const url=new URL("../icons/S/sigma-bold.svg?v=15e31559006922a2dec251d455b81d4f71898b0d83f35653ca106c2b952914ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
