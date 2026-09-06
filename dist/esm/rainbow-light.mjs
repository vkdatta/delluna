export const name="rainbow-light";
export const id="dl_0d779a327de04401898b";
export const url=new URL("../icons/rainbow-light.svg?v=bf51e02ef8cd79e3048c86c48ba1288174f90497e4912dff35ce6c51e804a18e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
