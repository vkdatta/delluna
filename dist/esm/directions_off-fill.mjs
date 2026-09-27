export const name="directions_off-fill";
export const id="dl_865b9858bc0a6a4b064f";
export const url=new URL("../icons/directions_off-fill.svg?v=f35677853170a9fcef05d0e04dd5e2393f2e85c2e612fb1651c23e855ccb8922",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
