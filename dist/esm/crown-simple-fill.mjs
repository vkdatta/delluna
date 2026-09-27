export const name="crown-simple-fill";
export const id="dl_047d3df0bd4241dab4a0";
export const url=new URL("../icons/crown-simple-fill.svg?v=a2082f845365f30c129541835312db164c615ea394f04e74ea8dd53265300df6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
