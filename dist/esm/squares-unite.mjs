export const name="squares-unite";
export const id="dl_97868d864115465baa2b";
export const url=new URL("../icons/squares-unite.svg?v=ee3a573cdee008ba8be06c922febb8a4f6179712639cc64cc730f49d9a85f51b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
