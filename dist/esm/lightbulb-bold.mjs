export const name="lightbulb-bold";
export const id="dl_bc70b35466964fbf89d3";
export const url=new URL("../icons/lightbulb-bold.svg?v=55cc9a91bbd89978d7992ae5c8066c64b4faafaae3b51126f6656eddcc39fe6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
