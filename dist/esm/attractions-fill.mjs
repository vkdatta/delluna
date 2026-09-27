export const name="attractions-fill";
export const id="dl_9676f36018c230abfd70";
export const url=new URL("../icons/attractions-fill.svg?v=d6c035e3c407bfdd71d5e1e7f832416ac7d4cccc66781966082569bc3a09034c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
