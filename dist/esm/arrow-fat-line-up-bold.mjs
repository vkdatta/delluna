export const name="arrow-fat-line-up-bold";
export const id="dl_d8660bbb3b0c45c79851";
export const url=new URL("../icons/arrow-fat-line-up-bold.svg?v=9fe3589bba96d552052bfb5ffa002d503f2c5161cc4044eabb7a076a1f0f823b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
