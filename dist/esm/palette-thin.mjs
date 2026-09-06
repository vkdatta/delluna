export const name="palette-thin";
export const id="dl_b752d1c8c0fb4f59b47d";
export const url=new URL("../icons/palette-thin.svg?v=eca8c60383790598ccea0ab926e6c84f71b4eab1450d61c5705067dd8cae6600",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
