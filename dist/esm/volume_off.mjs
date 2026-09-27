export const name="volume_off";
export const id="dl_caf062127b2379822e65";
export const url=new URL("../icons/volume_off.svg?v=8bdebf1eddf69a628dac303ea1f4826e10d981c077801b292b66298559063858",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
