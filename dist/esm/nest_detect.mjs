export const name="nest_detect";
export const id="dl_2ab3cf81ca55f0cd0d59";
export const url=new URL("../icons/nest_detect.svg?v=234d0673c253343270fa6ff0ccae79ed48fab2cbc6ca7c30580ab0d9ba2dad53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
