export const name="hr_resting";
export const id="dl_c73d9a5aa7a34b72dadd";
export const url=new URL("../icons/hr_resting.svg?v=f526144dc91fa17c9554a236c78bcbafdad1cfc520c03483e88d9ee679f2844b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
