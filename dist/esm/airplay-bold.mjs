export const name="airplay-bold";
export const id="dl_2c854e7251454cfcbe2f";
export const url=new URL("../icons/airplay-bold.svg?v=da12917a9e44a30b1045d523a68b894a5256517fd753a59785d057f7afe657ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
