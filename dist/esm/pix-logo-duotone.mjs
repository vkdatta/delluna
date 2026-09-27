export const name="pix-logo-duotone";
export const id="dl_10ac3011d66040d3be9f";
export const url=new URL("../icons/pix-logo-duotone.svg?v=77bb5629fbe592190d2b31dc7e9701adc6f048139b065a83cc76caf4eaee4443",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
