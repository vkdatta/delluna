export const name="tote-simple-duotone";
export const id="dl_28a2dc6ac19352a5cd67";
export const url=new URL("../icons/tote-simple-duotone.svg?v=ea935d03312e7abcd70528e7206332dad6e955d2b89ba4b6694c96791c82d1c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
