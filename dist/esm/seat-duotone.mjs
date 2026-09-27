export const name="seat-duotone";
export const id="dl_3376df764debaf61777b";
export const url=new URL("../icons/seat-duotone.svg?v=5d05cde4cb6a2bcbc0c2b20ff3a3b27e80f72fd978fdec316d41d8cd46ac4414",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
