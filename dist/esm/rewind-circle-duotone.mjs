export const name="rewind-circle-duotone";
export const id="dl_23c87f82b62f4fec91d8";
export const url=new URL("../icons/rewind-circle-duotone.svg?v=b549f46e31b568301f9e72dae29dcf16596eb09d461fba5d1a04f804a7f8fc40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
