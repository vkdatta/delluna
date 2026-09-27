export const name="layers_alt";
export const id="dl_8300ac894e1ea3b933ec";
export const url=new URL("../icons/layers_alt.svg?v=4145b7511ad541e3a4659f1836ab5371e0b3fb540fc67122dc41c9ecec280659",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
