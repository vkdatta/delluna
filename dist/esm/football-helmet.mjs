export const name="football-helmet";
export const id="dl_a282dbced9b740cea3d7";
export const url=new URL("../icons/football-helmet.svg?v=bdb33bdb022b32c7b6704e03f55a5e67aa0a1e2e8044c19177afe5494261f347",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
