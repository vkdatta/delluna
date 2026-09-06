export const name="diamonds-four-duotone";
export const id="dl_b1536f2632f346cc869a";
export const url=new URL("../icons/diamonds-four-duotone.svg?v=e99ad8d73cf56322d79fcdf48fdcca54129724f633263e04b6ec34bab7de9bc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
