export const name="arrow-square-up-right-duotone";
export const id="dl_756d50f7b9dc430b9207";
export const url=new URL("../icons/arrow-square-up-right-duotone.svg?v=b4c55ce7522ba0d8105e9c01a528d92adc9a5c13dfd1c820d641deb1ee2553fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
