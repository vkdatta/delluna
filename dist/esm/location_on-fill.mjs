export const name="location_on-fill";
export const id="dl_f0539f420926026fb93e";
export const url=new URL("../icons/location_on-fill.svg?v=7e3b9f2cabb2d4c8b393be50f9391cecb788bd1813e76541aa378c886db95902",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
