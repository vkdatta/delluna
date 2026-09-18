export const name="grid_on";
export const id="dl_ba3b16dd6b8041839b51";
export const url=new URL("../icons/grid_on.svg?v=2c06dec5f70b692bad5f0f9ece8270636befc1be2f6b7f9937e51dcd191e6a32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
