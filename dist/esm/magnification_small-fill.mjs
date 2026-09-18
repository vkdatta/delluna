export const name="magnification_small-fill";
export const id="dl_97f3365c011344b2b72b";
export const url=new URL("../icons/magnification_small-fill.svg?v=3cc065302317d6f6a14b9abfabcad135b01e299c6db651601900dd3685b8ece9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
