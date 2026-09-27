export const name="currency-jpy-light";
export const id="dl_bb0c305be96e4f728859";
export const url=new URL("../icons/currency-jpy-light.svg?v=442b6bc2ea39aea65136e781cb14abf023a10a8d62bd27a194b9cf53d3d7c9d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
