export const name="amazon-logo";
export const id="dl_c3a71e06398e4daa876b";
export const url=new URL("../icons/amazon-logo.svg?v=1f4f04f6ba9ad3caf4a45734e4196ee86f49bc3d0bc4d9dc34c7d2d2c0203fe0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
