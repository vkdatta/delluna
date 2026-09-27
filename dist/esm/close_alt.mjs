export const name="close_alt";
export const id="dl_e9c2ace9bbb3d87b5023";
export const url=new URL("../icons/close_alt.svg?v=1dd803af58979dc6c18358113bea9b8d893102adfca114867bde7e708d4ab345",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
