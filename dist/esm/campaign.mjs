export const name="campaign";
export const id="dl_47eb536abfac21a9f192";
export const url=new URL("../icons/campaign.svg?v=c7adc0abe47ab17bdca5ccf0677d3a1961be6c0ecc1625ac09a9c9789d11f364",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
