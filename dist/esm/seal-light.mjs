export const name="seal-light";
export const id="dl_3c053497ced87afe795d";
export const url=new URL("../icons/seal-light.svg?v=6b3d268cbe027bd5cf5c45f52986abc2cfe7478382cc4f01c9c803eaa5abe3d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
