export const name="spray-bottle-bold";
export const id="dl_ebee080edccade38d12e";
export const url=new URL("../icons/spray-bottle-bold.svg?v=c24aa0f64043041fff4259334dfb050dd604ac242cabb42cb573b697369c73b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
