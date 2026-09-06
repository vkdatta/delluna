export const name="fingerprint-duotone";
export const id="dl_b5473ba39dfc48ec976e";
export const url=new URL("../icons/fingerprint-duotone.svg?v=2390d01f9c704bd6ce61bc52c6ce20cb420132c308c58e389879d59796c7bc03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
