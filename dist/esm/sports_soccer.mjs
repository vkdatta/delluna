export const name="sports_soccer";
export const id="dl_61cf6ea3e04c803ba4db";
export const url=new URL("../icons/sports_soccer.svg?v=f85a21e0c63076ad70fd5bbc13199143effbfa049fc1f2d95f595d2cc05b59ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
