export const name="caret-circle-double-down-fill";
export const id="dl_cae19b08b88b495e9170";
export const url=new URL("../icons/caret-circle-double-down-fill.svg?v=62a6eb7a6af3b992c095aab355f17cd5077cc1e1e0834dae38398305c6894e00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
