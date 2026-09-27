export const name="split-horizontal-fill";
export const id="dl_b910ee346d8ad113745a";
export const url=new URL("../icons/split-horizontal-fill.svg?v=7a92b2430a306fc99feb89a12e6c289d39444ad25e40cb56539cdf1e7eafc559",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
