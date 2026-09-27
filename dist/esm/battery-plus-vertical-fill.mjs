export const name="battery-plus-vertical-fill";
export const id="dl_8314b7417c6149b29470";
export const url=new URL("../icons/battery-plus-vertical-fill.svg?v=de6e7fbc10677c466137f09a684eebce19f01d159bef997310917dee323aafc3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
