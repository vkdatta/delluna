export const name="magnet-straight-duotone";
export const id="dl_ef0d2b5ff78a45249b13";
export const url=new URL("../icons/magnet-straight-duotone.svg?v=4d56854a2140775ccf72945264b4bdbe7e3e534d4375bc1d284d3329fa3a5a5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
