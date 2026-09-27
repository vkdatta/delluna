export const name="bag-fill";
export const id="dl_8694513b97254a149be8";
export const url=new URL("../icons/bag-fill.svg?v=e5607e719fefe772617dc0065e299a25d6eb20a713f9e5074cd382bf54525408",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
