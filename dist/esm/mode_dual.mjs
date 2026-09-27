export const name="mode_dual";
export const id="dl_91bc91120eb65517722a";
export const url=new URL("../icons/mode_dual.svg?v=dd363bb12854a66ab1cd2c22e1def7240024658f1a683a7a51b08b78b793af93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
