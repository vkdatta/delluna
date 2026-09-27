export const name="baseball-helmet-duotone";
export const id="dl_ad860f6d0be84d1da9ef";
export const url=new URL("../icons/baseball-helmet-duotone.svg?v=18286255c3492e7278a6a3b3a1812ac3505650e0b3275c5137aecd5e0c5008c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
