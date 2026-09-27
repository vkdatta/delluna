export const name="stethoscope";
export const id="dl_14efd66b43841f1fb0fe";
export const url=new URL("../icons/stethoscope.svg?v=436c5c0acf7b49fb4a617593f290766631ab80fa350ed23ac49a05752df2316c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
