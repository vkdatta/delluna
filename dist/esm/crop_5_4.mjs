export const name="crop_5_4";
export const id="dl_64d5b67cb74e3a46aa82";
export const url=new URL("../icons/crop_5_4.svg?v=30117d55624e248d4c1dc9246c47b2219a73799a8452b397403fb4b75c1a5775",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
