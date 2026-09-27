export const name="pix-logo-duotone";
export const id="dl_10ac3011d66040d3be9f";
export const url=new URL("../icons/pix-logo-duotone.svg?v=8739f374d3e8252579691b907504c365356e11c0d673342fbe843ccf051eb301",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
