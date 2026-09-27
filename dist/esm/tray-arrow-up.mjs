export const name="tray-arrow-up";
export const id="dl_bb7f5667b6bb1686855d";
export const url=new URL("../icons/tray-arrow-up.svg?v=93dafa83208bea09fccef748483441a72815955ff429d3ce34949bb0bdf4df69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
