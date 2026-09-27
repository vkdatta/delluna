export const name="squares-subtract";
export const id="dl_478fb075120e4826b25d";
export const url=new URL("../icons/squares-subtract.svg?v=47aeca09991c164b3a76534115284f0b7d468e092eb0726ab13d87539235ef33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
