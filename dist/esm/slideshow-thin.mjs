export const name="slideshow-thin";
export const id="dl_6df3c01d33464334bc37";
export const url=new URL("../icons/S/slideshow-thin.svg?v=cbd5b42c082d88918a605c9063356f9efc373308c768a3bf18414b6addbbc80d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
