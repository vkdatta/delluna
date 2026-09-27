export const name="style";
export const id="dl_11042cbece11f663b9b2";
export const url=new URL("../icons/style.svg?v=ef9b0a555800739c538502602c56813df206382a9a87029c04a9d177b2efaec3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
