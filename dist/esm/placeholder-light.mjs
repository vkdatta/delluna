export const name="placeholder-light";
export const id="dl_dce60049ae874a5693cf";
export const url=new URL("../icons/placeholder-light.svg?v=4cc1c9296b5836436dae6c972c814bbfb1efdfc4dfcdd21e3c6bd43cd39a1347",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
