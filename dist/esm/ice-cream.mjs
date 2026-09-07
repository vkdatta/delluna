export const name="ice-cream";
export const id="dl_e04126a51de84615933f";
export const url=new URL("../icons/ice-cream.svg?v=4b1d7a52af27bd405d804548dfce29a3b763a029c5ed177de3e5a5e09ea294a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
