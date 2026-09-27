export const name="train-simple-fill";
export const id="dl_458bd1891529c21ba0d3";
export const url=new URL("../icons/train-simple-fill.svg?v=54295fe02eb8e2b134aa37fb4e934ff261049d776892c1a2c53720749c357f86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
