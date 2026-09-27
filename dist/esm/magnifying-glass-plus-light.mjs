export const name="magnifying-glass-plus-light";
export const id="dl_b3f9490542614b7b8702";
export const url=new URL("../icons/magnifying-glass-plus-light.svg?v=1169a80ffdf9c876f192ecf597c59eeb60ed05a2d7b732580ee0ad35a52b4f4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
