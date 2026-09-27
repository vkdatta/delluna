export const name="curtains";
export const id="dl_498ffd33865428683150";
export const url=new URL("../icons/curtains.svg?v=5b16846cb90bff7f5e35ca9b20d383efe87cb146cdbac735f54b749096bac402",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
