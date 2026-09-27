export const name="rounded_corner-fill";
export const id="dl_c5832e19cfe4e335d767";
export const url=new URL("../icons/rounded_corner-fill.svg?v=821759f117c5c46e93e040b3394a082a3ebb001292d65cce6c31d5b28b286869",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
