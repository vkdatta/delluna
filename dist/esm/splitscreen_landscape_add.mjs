export const name="splitscreen_landscape_add";
export const id="dl_05a709aa54644fb58ed4";
export const url=new URL("../icons/splitscreen_landscape_add.svg?v=fcc1b9822d93c2d46915fade34ee1747e015b422a3889fb26271cd75eee5fb48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
