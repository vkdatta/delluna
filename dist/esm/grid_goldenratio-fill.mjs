export const name="grid_goldenratio-fill";
export const id="dl_b6696566628f2c225c73";
export const url=new URL("../icons/grid_goldenratio-fill.svg?v=bb213458896a9042359fcf7e770c7130ebc22b6ee3970316329ea572b6030cbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
