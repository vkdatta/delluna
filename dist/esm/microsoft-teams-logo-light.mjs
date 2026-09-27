export const name="microsoft-teams-logo-light";
export const id="dl_bdf127373a824d97b9a6";
export const url=new URL("../icons/microsoft-teams-logo-light.svg?v=bfae8d94b90ba45833e8669e32949faed63eb6e137ac5836f4f2699b17940d82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
