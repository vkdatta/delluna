export const name="mode_off_on-fill";
export const id="dl_e4635c87fb0ae21b9bed";
export const url=new URL("../icons/mode_off_on-fill.svg?v=ace9e40d8d1c786f41d56efa41d9d38e928b1175a984d38fd4acdc013bc96d10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
