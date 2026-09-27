export const name="squares-unite";
export const id="dl_97868d864115465baa2b";
export const url=new URL("../icons/squares-unite.svg?v=cc70e887b79abd81a3121835742131fe30114658d91b4aa6ce2e65d830ca7d6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
