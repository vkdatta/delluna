export const name="format_image_back-fill";
export const id="dl_c4e1e5b1faa142698f55";
export const url=new URL("../icons/format_image_back-fill.svg?v=a3ed65ba750f11952db95c8308342f2c0242ce79025ec43e7416c53796672079",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
