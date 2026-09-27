export const name="tile_large";
export const id="dl_accf745c5709dd7a1a19";
export const url=new URL("../icons/tile_large.svg?v=d00716c42a326324751847b32ac2882f240f88a772565a793dced77dd28e8ee8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
