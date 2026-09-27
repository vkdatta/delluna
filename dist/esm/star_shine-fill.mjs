export const name="star_shine-fill";
export const id="dl_7ac0fc84fa47faa6eca6";
export const url=new URL("../icons/star_shine-fill.svg?v=6f95d46c42bbcd53419ae030d025d377093ca4d282d520e2088d497180f1912e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
