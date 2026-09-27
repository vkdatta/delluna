export const name="home_max_dots";
export const id="dl_371cd0b7026712c0112f";
export const url=new URL("../icons/home_max_dots.svg?v=94967b9b80f43362b286a52daee05a538c42784005ff959649860beb1c8ef9b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
