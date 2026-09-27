export const name="spade-light";
export const id="dl_6e7d03b3aa8ba3db9e5c";
export const url=new URL("../icons/spade-light.svg?v=411ef06fcfde4cfacf0a02983cbd58db7e43cd3adbc347df9988585f4fc353e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
