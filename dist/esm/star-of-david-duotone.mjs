export const name="star-of-david-duotone";
export const id="dl_718257a090474a78b586";
export const url=new URL("../icons/S/star-of-david-duotone.svg?v=00e1fa0c638109825ae5ff44263183473058ca16a4c1cf7fcd2d76665f80c9b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
