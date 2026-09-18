export const name="file_png";
export const id="dl_846cfb6695d34581b456";
export const url=new URL("../icons/file_png.svg?v=fb3083f730f428d25f824c307cd5543240c30ecfe5bcba9e9abf97ae368eb074",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
