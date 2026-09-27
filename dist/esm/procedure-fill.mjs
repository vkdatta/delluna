export const name="procedure-fill";
export const id="dl_5ce8a3118811098096bd";
export const url=new URL("../icons/procedure-fill.svg?v=55c0f99ea2bed9f0d01751f57f0bdf7051d6013c9930b5557c44f31e2e274201",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
