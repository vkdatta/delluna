export const name="squares-subtract";
export const id="dl_478fb075120e4826b25d";
export const url=new URL("../icons/squares-subtract.svg?v=0c2b251994e29b1f1803784c510b9cce53e15960f2b8827143efce8c41b37919",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
