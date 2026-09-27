export const name="dev-to-logo-duotone";
export const id="dl_0323ab13b7044abeb21b";
export const url=new URL("../icons/dev-to-logo-duotone.svg?v=22c1378993b9c2018e9b808661f8ee110dca9983cc02853490647c5b19b258fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
