export const name="unpublished-fill";
export const id="dl_06a88029598769f9cbf6";
export const url=new URL("../icons/unpublished-fill.svg?v=cd924ceff917027b725ac4a026b064e4a02f6939a4284e24e19406519d42933f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
