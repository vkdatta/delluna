export const name="smiley-sad-light";
export const id="dl_47337ee2e6b175f0798d";
export const url=new URL("../icons/smiley-sad-light.svg?v=55a5810cb434e38056259e279b8726b4f3d81ec18aedd3d95c984fdd48384f07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
