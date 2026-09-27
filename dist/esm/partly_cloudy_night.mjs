export const name="partly_cloudy_night";
export const id="dl_cf68fd42a53e31401a73";
export const url=new URL("../icons/partly_cloudy_night.svg?v=d09105607836a1a791143e9eebab989c6217cebabcacb99f7a13d121d553aa65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
