export const name="earbuds_2-fill";
export const id="dl_027af2c9af5845be9388";
export const url=new URL("../icons/E/earbuds_2-fill.svg?v=ed6a34a6d2be81e43e3e753efb74c71ee969eb2e2d5469ae04c510aa86383844",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
