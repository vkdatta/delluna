export const name="alt_route-fill";
export const id="dl_ed3825cffc626f79000b";
export const url=new URL("../icons/alt_route-fill.svg?v=2fea33d510bb224f27789ede0a1d34467c84ced7a39af8a7b043ace59a033374",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
