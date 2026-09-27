export const name="sim-card-duotone";
export const id="dl_fcf1ed00182b1d3a7f8f";
export const url=new URL("../icons/sim-card-duotone.svg?v=942eb7d9656cc8f92054f5a37fb45b8ac26933deccbcd8b7250104b0585ac931",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
