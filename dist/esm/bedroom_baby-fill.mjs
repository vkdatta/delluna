export const name="bedroom_baby-fill";
export const id="dl_f53b82801b10a068725f";
export const url=new URL("../icons/bedroom_baby-fill.svg?v=a803678a90f59740fc51e419051c72fb60ad947bcc44fd33d824d05897d52f89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
