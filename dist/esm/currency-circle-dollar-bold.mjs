export const name="currency-circle-dollar-bold";
export const id="dl_8b4889039aa4471ba979";
export const url=new URL("../icons/currency-circle-dollar-bold.svg?v=b1adc9fb06f3b39c3eeda3e6b7710283d01e34f70b62110adc3fcd3755888410",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
