export const name="satellite_alt";
export const id="dl_362d9e485a3d0355fbdd";
export const url=new URL("../icons/satellite_alt.svg?v=5f3ecb52ebb01b517b362695ca721dd5103b5580ac8cf01733bd9223c11878d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
