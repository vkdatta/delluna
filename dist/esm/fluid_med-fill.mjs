export const name="fluid_med-fill";
export const id="dl_4dd8bed0ed257de62029";
export const url=new URL("../icons/fluid_med-fill.svg?v=230e770b923d3ca53306d569bbbae97509ca2ccc700872a9ddc0d5cb29b8c37d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
