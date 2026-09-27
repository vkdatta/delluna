export const name="calculate";
export const id="dl_bb4b1a58c7a1cfc21e9c";
export const url=new URL("../icons/calculate.svg?v=faefd6e341bc693c76dd601c65be96ae4ee1a4ee704c490141102499800206cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
