export const name="curtains";
export const id="dl_191f38205132054e61c8";
export const url=new URL("../icons/curtains.svg?v=07b03a85f9b2032d625dfbcdbb55e131d27d94782718448e2ef7d83cce247351",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
