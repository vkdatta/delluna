export const name="crib";
export const id="dl_a4f30f299e5597f699ef";
export const url=new URL("../icons/crib.svg?v=4a0962c013720b2757fbd110d003c66815869921d27b0d98f9ea7f05f82fc096",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
