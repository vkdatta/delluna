export const name="currency-gbp-fill";
export const id="dl_6269740e6dcf428092e4";
export const url=new URL("../icons/currency-gbp-fill.svg?v=3bb98a596b592e72ebe7c9a433fc33029f3d39ccea2090caa42b516ebc88dc40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
