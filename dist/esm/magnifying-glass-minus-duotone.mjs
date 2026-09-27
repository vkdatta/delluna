export const name="magnifying-glass-minus-duotone";
export const id="dl_ffc05836b1184f6599e2";
export const url=new URL("../icons/magnifying-glass-minus-duotone.svg?v=5fc62153be63fe0213581b1a35e53540b8b775210d018b1295a56fd75ebc5c7e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
