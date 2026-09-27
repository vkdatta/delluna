export const name="tag-chevron-thin";
export const id="dl_81ed5d49d432638f129f";
export const url=new URL("../icons/tag-chevron-thin.svg?v=35b91556676d712f6b4e64da92003857561f912f48037999167179464c373aae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
