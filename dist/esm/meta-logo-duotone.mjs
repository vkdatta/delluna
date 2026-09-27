export const name="meta-logo-duotone";
export const id="dl_bdf0cdf0700f403895a9";
export const url=new URL("../icons/meta-logo-duotone.svg?v=6d647fae7d0342b5e2dcedf4d313d0f0e05042532a27d5594f3906090a32e544",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
