export const name="location_on-fill";
export const id="dl_80cf4326005c7e0a3233";
export const url=new URL("../icons/location_on-fill.svg?v=543012f73ef08cf490fb7450ef9f992955c3d6cf4a58c4b02afefaaf0747b656",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
