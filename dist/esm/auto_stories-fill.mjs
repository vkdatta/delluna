export const name="auto_stories-fill";
export const id="dl_0c79b18caf1b44a686f8";
export const url=new URL("../icons/auto_stories-fill.svg?v=8d44011e95a2576970205035139e0e378f9c2eba24491a1a5818048403709870",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
