export const name="compass-light";
export const id="dl_8fafb5dca81e476e9b12";
export const url=new URL("../icons/compass-light.svg?v=4d4895432e0e52fb9e05f60b19fafc84bb78f1392369c96b75b7d7074a093642",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
