export const name="sports_motorsports";
export const id="dl_bfc4927628ae5431fcc8";
export const url=new URL("../icons/sports_motorsports.svg?v=3f2c28db808dab844d25cf1e77da8821b6fdfdaaaedf1b276e7d1d5264c92179",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
