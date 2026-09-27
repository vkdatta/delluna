export const name="pen-nib-straight-light";
export const id="dl_e8eea3ad23c74f96aa36";
export const url=new URL("../icons/pen-nib-straight-light.svg?v=e169207aaba40a8344ea539c273dea79277be512196c601da05ad19964fffddf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
