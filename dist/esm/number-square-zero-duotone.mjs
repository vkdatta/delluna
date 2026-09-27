export const name="number-square-zero-duotone";
export const id="dl_fa7397f26b2a403eb74d";
export const url=new URL("../icons/number-square-zero-duotone.svg?v=5acdbdc8fb8e28cb7f2cee796bc2d7153fa0c47b6e8e3242e4c5afb675a07bd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
