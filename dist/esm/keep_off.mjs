export const name="keep_off";
export const id="dl_249c373dd7c347bc8aa1";
export const url=new URL("../icons/K/keep_off.svg?v=dd37dbda80097fdc4571f204daed52b4ac3521baa8ecb641434cbc821ff7b541",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
