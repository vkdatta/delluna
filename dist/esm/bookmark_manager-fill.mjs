export const name="bookmark_manager-fill";
export const id="dl_20441ff5174b884bb5c7";
export const url=new URL("../icons/bookmark_manager-fill.svg?v=591ca36e9ba2344b6a156ff30898aa22b44d75403471a20e4e646dfeaf681f5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
