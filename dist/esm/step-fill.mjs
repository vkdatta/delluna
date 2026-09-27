export const name="step-fill";
export const id="dl_52895bcebbbf4eb2529c";
export const url=new URL("../icons/step-fill.svg?v=342fb57fb12f744e64e0a13334408429aaae69c39053541bf822911202ce2593",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
