export const name="cookie-fill";
export const id="dl_e11e72adf85fd078fd3f";
export const url=new URL("../icons/cookie-fill.svg?v=cefee177626d64c607fd972a6fb56a14b54d36386094265f0b08dcf341162e22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
