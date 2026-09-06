export const name="gender-female-fill";
export const id="dl_bd65ad7e65444ba891fc";
export const url=new URL("../icons/gender-female-fill.svg?v=870b32337202ec1db2b2b80c69bfc813254527746c9d906fe730086bc6ab6780",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
