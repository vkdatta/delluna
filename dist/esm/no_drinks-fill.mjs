export const name="no_drinks-fill";
export const id="dl_547b77d18de770c64fea";
export const url=new URL("../icons/no_drinks-fill.svg?v=ce6accbed68412888860dad9e6339d03847e4226dc04bea4169fda1300a247e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
