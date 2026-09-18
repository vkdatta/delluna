export const name="water_do-fill";
export const id="dl_081c41ea81f243db9fda";
export const url=new URL("../icons/water_do-fill.svg?v=334ef390205f52a3cfae01a6814b5ef80dc34025210e4be33ae68cfbbf6ee4aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
