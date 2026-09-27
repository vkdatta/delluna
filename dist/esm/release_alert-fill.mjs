export const name="release_alert-fill";
export const id="dl_5ff4776737b84ef9a669";
export const url=new URL("../icons/release_alert-fill.svg?v=25303e8cd51eacac9fb84cbee4f88ae00e01d771ef63f0ea1f0ed4a38d947769",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
