export const name="adf_scanner";
export const id="dl_36a074460034961f0d47";
export const url=new URL("../icons/adf_scanner.svg?v=9217340b8c31411995f58856480105ced54d22793fb3d98c506b7e6eecff3f0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
