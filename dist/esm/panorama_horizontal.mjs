export const name="panorama_horizontal";
export const id="dl_c78661043519f04b227f";
export const url=new URL("../icons/panorama_horizontal.svg?v=605edcc4add6a70d7be5af9dd4c9be35cc4846f654c2100e54b82a85bc8199db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
