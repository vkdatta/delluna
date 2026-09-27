export const name="globe-simple-bold";
export const id="dl_9f39a833a5c44b4f83c9";
export const url=new URL("../icons/globe-simple-bold.svg?v=7a9d64ca9c0df389372db89f86d35c2bbf91f58deb249c2f626496559bc35412",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
