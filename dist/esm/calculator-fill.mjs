export const name="calculator-fill";
export const id="dl_143f74ceedcf457f869f";
export const url=new URL("../icons/calculator-fill.svg?v=adcd7e2e39ada9a236ebb1cc7a82230589a7dc2e2a5021b0e02850c0fd7b2d1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
