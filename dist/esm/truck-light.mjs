export const name="truck-light";
export const id="dl_d1521ba89c672d28a7ad";
export const url=new URL("../icons/truck-light.svg?v=5cb7fb51baef64adc7d14e3aad5657f70b33705eba156f1693175f7eefea9955",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
