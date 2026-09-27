export const name="pix-logo-light";
export const id="dl_d7491cd7bd384fe4a0f4";
export const url=new URL("../icons/pix-logo-light.svg?v=5810b53ee8a36f95b45915a2f5a00c9839c71d27247924bc64cdb861e60d303d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
