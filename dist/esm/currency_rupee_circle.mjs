export const name="currency_rupee_circle";
export const id="dl_55498a530ee94f03ab7f";
export const url=new URL("../icons/C/currency_rupee_circle.svg?v=43d8d0da68ad21639315f36a2c3749ab4127ad91db6cfabef2b3dbf9bf4d9e39",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
