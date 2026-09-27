export const name="smiley-sad-bold";
export const id="dl_c153500feb2d619a37fb";
export const url=new URL("../icons/smiley-sad-bold.svg?v=6543ae5067c469b6d4e68e86a44826e58cc9da475fbcf5cb42c6a36b5402ecae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
