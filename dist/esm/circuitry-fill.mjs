export const name="circuitry-fill";
export const id="dl_91b247e687ea445ca92d";
export const url=new URL("../icons/circuitry-fill.svg?v=9078fb7501635784f47bbdae7ec2b437000d4327dadc6d3a1d13d0e12129031d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
