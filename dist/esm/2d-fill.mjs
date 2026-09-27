export const name="2d-fill";
export const id="dl_8795fdfd380a11da6ba3";
export const url=new URL("../icons/2d-fill.svg?v=0342d6aa5d41e49a64eabb982c400828708ee7c390f54300680a32900a364518",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
