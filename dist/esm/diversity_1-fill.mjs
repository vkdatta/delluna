export const name="diversity_1-fill";
export const id="dl_e80ed9c3af9680dde188";
export const url=new URL("../icons/diversity_1-fill.svg?v=f02fbaa05d6f9707555f90b843df7f70da71c80dd7e8bd4cf3db77fa1ade1f79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
