export const name="footprints-duotone";
export const id="dl_fa5eb98ebe0441a891b0";
export const url=new URL("../icons/footprints-duotone.svg?v=bdfe2c85e4141a665ce556725cfde69f0a54eb96ca82109350e8929bb12e3fc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
