export const name="photo_size_select_small-fill";
export const id="dl_cb413e39f9d75e6507ab";
export const url=new URL("../icons/photo_size_select_small-fill.svg?v=fb3ceeca68f58389b51da203752db0e4468bafe1770cdf99f9930b53c63a6c79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
