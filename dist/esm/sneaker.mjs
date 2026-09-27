export const name="sneaker";
export const id="dl_1033b942d02dee949f8a";
export const url=new URL("../icons/sneaker.svg?v=91a969d485f943aa6a07d6eaebdcdf4f38c7eeaa48895f5b16a7029abc0237f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
