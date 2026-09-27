export const name="rainy_snow-fill";
export const id="dl_7ab746521987a6cfe9ad";
export const url=new URL("../icons/rainy_snow-fill.svg?v=bda413c05cb2ec0066dbe506eba17d814af27774d8977a6eef92854ed7e32bf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
