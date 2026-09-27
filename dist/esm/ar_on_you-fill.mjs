export const name="ar_on_you-fill";
export const id="dl_d677aa450176c55e7734";
export const url=new URL("../icons/ar_on_you-fill.svg?v=5afdd4938b17f5c7f5baeb423c8f5b1c65a620300086da404243321ba85166cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
