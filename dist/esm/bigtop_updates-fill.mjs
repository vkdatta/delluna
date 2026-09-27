export const name="bigtop_updates-fill";
export const id="dl_eb88a87aee51b26fb92f";
export const url=new URL("../icons/bigtop_updates-fill.svg?v=87798d676550898a649a57fe94fa06c1ee9e6634e8502bb250fabee0d77f1bd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
