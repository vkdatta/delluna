export const name="margin";
export const id="dl_22e4889fa3669143ee2b";
export const url=new URL("../icons/margin.svg?v=efa0b0d3bde9a5a568411de5199a9847993673ab9657665d89b0e6f49d4ee99e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
