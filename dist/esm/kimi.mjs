export const name="kimi";
export const id="dl_6a901da983519c522983";
export const url=new URL("../icons/kimi.svg?v=4cfbdf027f4fe49e7eebf569111ae980840999d19834fdd20e10a300c27ac777",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
