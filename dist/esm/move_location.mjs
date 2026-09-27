export const name="move_location";
export const id="dl_71f1779e501297dcaa80";
export const url=new URL("../icons/move_location.svg?v=9df4ce96a5eacd339a8a5e61a6724238786ceb2f8a9ba9725947818b4740ec5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
