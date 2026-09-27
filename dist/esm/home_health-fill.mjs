export const name="home_health-fill";
export const id="dl_eea252710648aa03dd4e";
export const url=new URL("../icons/home_health-fill.svg?v=cb0b88b3b8594807df394469cc53a2444d01df0a46f1571319757187a7736d71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
