export const name="local_pharmacy";
export const id="dl_aed0a6af2d004f4aaf2c";
export const url=new URL("../icons/local_pharmacy.svg?v=7fb263a2dff853c96dcb168d4b2461e0be7dd9b1c352cfaf5cac3eca2ea62251",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
