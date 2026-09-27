export const name="layers";
export const id="dl_dfca45037f331488e080";
export const url=new URL("../icons/layers.svg?v=bcfcb9b3e01ad4a01901f7ed89d8a7e6edb88a89607479b8b0abd0731daedcfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
