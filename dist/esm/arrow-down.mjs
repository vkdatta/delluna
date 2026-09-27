export const name="arrow-down";
export const id="dl_bff643a35e084641bc2a";
export const url=new URL("../icons/arrow-down.svg?v=3d1b769578c043287df685400fc2c5755e806b33c2c21ee21562b341f144bb26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
