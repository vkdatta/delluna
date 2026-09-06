export const name="flag-banner-bold";
export const id="dl_84b2ecd66a70409cb33b";
export const url=new URL("../icons/flag-banner-bold.svg?v=c872997406e441b084a236f4defb6ae98e58d523fbf9fda196e47f3ca5135ae7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
