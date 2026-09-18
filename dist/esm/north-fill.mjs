export const name="north-fill";
export const id="dl_ec51ff6982e747a5820f";
export const url=new URL("../icons/N/north-fill.svg?v=e697cdf8c475e2bf46e7b047e0db8e59fc7e930c7ed03fd730922156870c4a4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
