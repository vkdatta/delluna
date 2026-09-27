export const name="slideshow-bold";
export const id="dl_dc1c8c4a8cc1c38db393";
export const url=new URL("../icons/slideshow-bold.svg?v=33820a4f0e5775c07eadad73f71bd3853d81856906d14202243b966a86f3ee8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
