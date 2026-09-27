export const name="loupe";
export const id="dl_049d37040bd397275561";
export const url=new URL("../icons/loupe.svg?v=e59c499c4459a5dd8dfcc66cd55c2cdc1ca1676080b6dfd5977b1d99e78638fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
