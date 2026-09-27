export const name="brackets-round-bold";
export const id="dl_e0968f86a1d84786a75f";
export const url=new URL("../icons/brackets-round-bold.svg?v=5280623a27a2c58b8006fecab019ef7453eb7bd9495b88d99a685e311d598fcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
