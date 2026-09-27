export const name="map-trifold";
export const id="dl_e38b0291592c40dc977e";
export const url=new URL("../icons/map-trifold.svg?v=45de9be64a56b89d33ae8d6ce88a6bdb7d6c351858541488f873a910534ced08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
