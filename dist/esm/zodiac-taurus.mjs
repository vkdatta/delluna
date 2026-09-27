export const name="zodiac-taurus";
export const id="dl_3be4147e2a084c7a9211";
export const url=new URL("../icons/zodiac-taurus.svg?v=401c024bf0cf5e24c280dd976f610e01695597035c86a9f2a512016630b7eaf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
