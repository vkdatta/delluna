export const name="cactus-fill";
export const id="dl_76a2befd333446d78670";
export const url=new URL("../icons/cactus-fill.svg?v=745943f61f6bf600ba67c8cb48f9ee2d6aefd3590aed0a16f0ce81a12c8f5633",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
