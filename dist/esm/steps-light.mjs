export const name="steps-light";
export const id="dl_8141207706121455efd6";
export const url=new URL("../icons/steps-light.svg?v=cf76dc96195dedfda5b968f652a09db487ae33667004e75bbc1738a122ea9f0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
