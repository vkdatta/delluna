export const name="subset-of-duotone";
export const id="dl_35f5481acd158307e6cd";
export const url=new URL("../icons/subset-of-duotone.svg?v=fbc5851635b5c73da7882e0eb1fbf9da523761f253b81055d3baea22e22277a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
