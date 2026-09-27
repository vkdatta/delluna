export const name="headset-fill";
export const id="dl_2148b9844ba64697bc9a";
export const url=new URL("../icons/headset-fill.svg?v=5b912e77723158aeff4ab4c67d06c46383cb9446524987004c9fbf6f39f11d08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
