export const name="pix-logo-light";
export const id="dl_d7491cd7bd384fe4a0f4";
export const url=new URL("../icons/pix-logo-light.svg?v=7572462c2d140f3587c4d1c00fb9f2e0f9b4b68fccd772f6ee15aff86e6e7350",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
