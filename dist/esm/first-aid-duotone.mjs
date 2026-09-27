export const name="first-aid-duotone";
export const id="dl_0b85f340eb0846929cb9";
export const url=new URL("../icons/first-aid-duotone.svg?v=98223c149cb84a052fcda4e6c46eecaf94dd04b332573a5e9d5beaac713301b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
