export const name="flag-banner";
export const id="dl_ed328b95e22c4cc1b59b";
export const url=new URL("../icons/flag-banner.svg?v=a06f78b1ded4b51fa2383bac443cfedb13c877521a73d34eb074439bc9a224bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
