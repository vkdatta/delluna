export const name="bulldozer-duotone";
export const id="dl_364d4cebaae44e838828";
export const url=new URL("../icons/bulldozer-duotone.svg?v=5666c89fbdb4010ae94548b0b550a27cf980df5b321cd70db85f7d4867b56b57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
