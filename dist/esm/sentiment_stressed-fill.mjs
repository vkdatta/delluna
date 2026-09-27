export const name="sentiment_stressed-fill";
export const id="dl_43eb3bf5ecbf7cdab32a";
export const url=new URL("../icons/sentiment_stressed-fill.svg?v=7d532975e862ac79efe449a817ee4aec010550a244a2839ac1861867d205c86f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
