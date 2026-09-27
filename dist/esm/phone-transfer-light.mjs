export const name="phone-transfer-light";
export const id="dl_6cf28fd0137a4174b8be";
export const url=new URL("../icons/phone-transfer-light.svg?v=f5667096a31ea2532e6e3546424b69a788d1a3871b279bb639df816608d3ce75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
