export const name="caret-circle-up-light";
export const id="dl_f98fdc2317214e49a421";
export const url=new URL("../icons/caret-circle-up-light.svg?v=1d912e31f343801f33d0dd4e4fb7037a996522ba5c69d14e454a48bcdedd1421",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
