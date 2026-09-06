export const name="squares-unite";
export const id="dl_97868d864115465baa2b";
export const url=new URL("../icons/squares-unite.svg?v=3cc6d848c12d64ceac20038ccc524b38107564b40a67691671bc32105aca6389",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
