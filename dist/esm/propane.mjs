export const name="propane";
export const id="dl_4ff600ab47103414ee48";
export const url=new URL("../icons/propane.svg?v=b58bf0be60070b4209f68f787aa1630fadf598c66eaf0c2735e4a5caeceebb7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
