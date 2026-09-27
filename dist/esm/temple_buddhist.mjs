export const name="temple_buddhist";
export const id="dl_6b7ff080ac176c035276";
export const url=new URL("../icons/temple_buddhist.svg?v=9c3894092166a293dab32d9cffadc7060f0410c6f0a69b1c9a18910459f4ea93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
