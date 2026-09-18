export const name="share_location-fill";
export const id="dl_6117cfa997d844d284a1";
export const url=new URL("../icons/share_location-fill.svg?v=19fa1ecc0fefe48f7c4cee35748ab4eed8fb549d94b6c0b6374c9763da7055a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
