export const name="funnel-light";
export const id="dl_a5a2d587972e4902a198";
export const url=new URL("../icons/funnel-light.svg?v=8c3d5cc172cda5ddd2b51eba77bd495c78953124badc77761126777641da2b92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
