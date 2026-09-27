export const name="h_plus_mobiledata_badge-fill";
export const id="dl_750efe36337e909f22e1";
export const url=new URL("../icons/h_plus_mobiledata_badge-fill.svg?v=a71e297d1d2d850dc1f372b283db257115c6e736990ded91f36a9c42e8ec9835",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
