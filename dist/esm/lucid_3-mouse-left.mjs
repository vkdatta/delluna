export const name="lucid_3-mouse-left";
export const id="dl_37e996dacc6c474295b4";
export const url=new URL("../icons/lucid_3-mouse-left.svg?v=559884bc2190105c684ec12fb412e6e95c10c9d7706b85e66d83236e0ee9c8af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
