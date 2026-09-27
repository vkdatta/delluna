export const name="selection-light";
export const id="dl_e72ca3407f35b98a0f6e";
export const url=new URL("../icons/selection-light.svg?v=5d1a2e83353f72c98b72672a751f84e6f65dc476e877d2a1969b140de823f871",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
