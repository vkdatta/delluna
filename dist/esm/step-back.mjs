export const name="step-back";
export const id="dl_c11160e18e514669b9f3";
export const url=new URL("../icons/step-back.svg?v=96a1a66037188783d467e385e5f9ab2c31e74d3a854325ce68831f1f52549337",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
