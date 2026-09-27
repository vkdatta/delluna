export const name="laundry-fill";
export const id="dl_fad10cf739b8fe735a84";
export const url=new URL("../icons/laundry-fill.svg?v=a8968539f1a87903b7e5eb6cb70846c35ad2b075613a02695d6a012056b3d486",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
