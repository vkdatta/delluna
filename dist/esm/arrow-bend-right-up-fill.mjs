export const name="arrow-bend-right-up-fill";
export const id="dl_a6bb7bfa98cb45f786f8";
export const url=new URL("../icons/arrow-bend-right-up-fill.svg?v=19fdccaf7cc112af5faee6c08fcfb5522869f798568247390ba09752539e812a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
