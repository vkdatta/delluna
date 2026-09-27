export const name="roller_shades_closed";
export const id="dl_bcdc4d1463d657416a16";
export const url=new URL("../icons/roller_shades_closed.svg?v=55cf122918ceb080f94ec626362c432ac43356f4a8d6f6654b7cb75331d152bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
