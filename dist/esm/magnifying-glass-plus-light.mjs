export const name="magnifying-glass-plus-light";
export const id="dl_b3f9490542614b7b8702";
export const url=new URL("../icons/magnifying-glass-plus-light.svg?v=ab990675c775574196c1175bcf99e2a4679bd6ebdd366d75828ad701b5df5ee6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
