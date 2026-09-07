export const name="seat-duotone";
export const id="dl_71870895d82a47868ee9";
export const url=new URL("../icons/S/seat-duotone.svg?v=6d0f7c2411bd465d41fb412d3821264e4a723c2eace8f5641134beeb1d634a9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
