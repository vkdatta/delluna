export const name="folder-simple-minus-light";
export const id="dl_e5d03018a7d746d3b659";
export const url=new URL("../icons/folder-simple-minus-light.svg?v=57a47257f8d95d5af077bedcdf22d521c2d061a6c95d2e3c3bb7cb816940e72a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
