export const name="behance-logo-duotone";
export const id="dl_48e2b5bc5d044e79af92";
export const url=new URL("../icons/behance-logo-duotone.svg?v=5bd079d06f03f90cd2cce55fa37e8de8ce40d851ce247803868318324e174b87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
