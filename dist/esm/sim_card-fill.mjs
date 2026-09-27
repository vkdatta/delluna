export const name="sim_card-fill";
export const id="dl_6d33822084c0bfa865a0";
export const url=new URL("../icons/sim_card-fill.svg?v=2b5a031bde2ad44545782e30c4627b0323ca01dace13ac352617701da7380819",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
