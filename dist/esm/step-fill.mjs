export const name="step-fill";
export const id="dl_8e186d95d971e21c7bf8";
export const url=new URL("../icons/step-fill.svg?v=b96e9a042bcb52ec468e8c733e6aa76d3e1492d1142a9fbd90799c846221cc5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
