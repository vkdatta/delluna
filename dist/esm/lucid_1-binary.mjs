export const name="lucid_1-binary";
export const id="dl_e34c7f49593046309c89";
export const url=new URL("../icons/lucid_1-binary.svg?v=3e1ad72ebb2b6abc788c074fe4ba3886bf15e5645a64dc78b8b97fddfc7930d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
