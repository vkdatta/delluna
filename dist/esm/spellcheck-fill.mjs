export const name="spellcheck-fill";
export const id="dl_90d4545076640019ce96";
export const url=new URL("../icons/spellcheck-fill.svg?v=68d3e64cad2e96a0cf9a93b1eca28ff4d3c11ddef5b20ab84de98e3a113fbc16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
