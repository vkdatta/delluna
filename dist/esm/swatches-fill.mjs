export const name="swatches-fill";
export const id="dl_91fbc6f4ef46e6e6f470";
export const url=new URL("../icons/swatches-fill.svg?v=499fbd1be1e31084489cd44aadb33931fc9b327d2c0d1b05374494767dae802e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
