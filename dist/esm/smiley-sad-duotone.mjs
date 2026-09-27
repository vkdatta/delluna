export const name="smiley-sad-duotone";
export const id="dl_249574ca2112ee394198";
export const url=new URL("../icons/smiley-sad-duotone.svg?v=f3b58f8d8ba41dda51ad5f747f49bac08620682308bccf0ab6fa2b6749b90726",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
