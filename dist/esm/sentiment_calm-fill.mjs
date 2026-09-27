export const name="sentiment_calm-fill";
export const id="dl_718c9da9c47158354922";
export const url=new URL("../icons/sentiment_calm-fill.svg?v=55d3fd58e80eaa2670aff4c879c2593292eecab69bde0ae0cc05804261378e8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
