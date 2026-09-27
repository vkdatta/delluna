export const name="magnet-straight-light";
export const id="dl_29034afdff1744439314";
export const url=new URL("../icons/magnet-straight-light.svg?v=747ef2ae5cede4c308326c8ee9cfca3063ba9f5b363c64ab05248d05419fec85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
