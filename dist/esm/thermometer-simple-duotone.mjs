export const name="thermometer-simple-duotone";
export const id="dl_6627f89bbf814c029c76";
export const url=new URL("../icons/T/thermometer-simple-duotone.svg?v=6ae133a7c725fc30d46ea46bbfd29a9627788a17b04d5ceeec88c630b3192055",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
