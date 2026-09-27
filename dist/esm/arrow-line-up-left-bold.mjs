export const name="arrow-line-up-left-bold";
export const id="dl_a2d80c24c0484509853d";
export const url=new URL("../icons/arrow-line-up-left-bold.svg?v=feb0bcf36ccd4479494330f1dc18ae4e7ba86fc138c0a375603c888d88ceece5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
