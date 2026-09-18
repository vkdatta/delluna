export const name="wall_lamp-fill";
export const id="dl_c9850cb19e9946cfac51";
export const url=new URL("../icons/wall_lamp-fill.svg?v=553675f895b2e23d953156ce95d2ebfbd44a85aaf98fff85d5c1f28594999517",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
