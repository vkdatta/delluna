export const name="certificate-light";
export const id="dl_bc52a9ddffa54f3d8d1a";
export const url=new URL("../icons/certificate-light.svg?v=4859bd987bdb30ed45ff72649ef9e81a51e51652a951d307b32d645b32b8e0ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
