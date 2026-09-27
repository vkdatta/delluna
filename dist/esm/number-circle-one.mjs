export const name="number-circle-one";
export const id="dl_d2d40c3c5af64b1a960d";
export const url=new URL("../icons/number-circle-one.svg?v=12fbef077b450210fbbdd659d5efb93cd2c910391027ab446cb9addf66c35edb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
