export const name="stat_minus_2-fill";
export const id="dl_aabca06ea02cea5c324e";
export const url=new URL("../icons/stat_minus_2-fill.svg?v=9f281bf24eab855270d27d8ca12df5ca5ee414f419af7f52fa73b8c29e2062bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
