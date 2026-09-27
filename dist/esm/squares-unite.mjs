export const name="squares-unite";
export const id="dl_97868d864115465baa2b";
export const url=new URL("../icons/squares-unite.svg?v=c13eb34a088b8d3ae756ab8a649bf262bf9854d49d210de23b3c67c48420c3be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
