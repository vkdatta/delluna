export const name="currency-circle-dollar-light";
export const id="dl_8362e452261d4395b660";
export const url=new URL("../icons/currency-circle-dollar-light.svg?v=9fc4be43f554b718376d200ee1156ede371f14c1704ce21044546ada977c0886",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
