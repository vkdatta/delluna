export const name="barefoot-fill";
export const id="dl_fa92f48587875bdb4e99";
export const url=new URL("../icons/barefoot-fill.svg?v=b88bed214fcc930f60cf85cf495d0aac3648ed4b87687467a4679feb92d57b61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
