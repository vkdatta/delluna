export const name="phosphor-logo-fill";
export const id="dl_7d9c7576513349c6aea0";
export const url=new URL("../icons/phosphor-logo-fill.svg?v=f2e5c5b6a47f3915961245f91c4232344a6cfcdfaf1e7c04b9dea8b35c0404d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
