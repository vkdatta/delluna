export const name="phone-x-light";
export const id="dl_d3a6a269879240108c19";
export const url=new URL("../icons/phone-x-light.svg?v=e727f49d5aeda879503c10601ed4ac2f06d59dd2e2e44f162ee0107a4047bd09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
