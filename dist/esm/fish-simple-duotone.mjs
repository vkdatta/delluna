export const name="fish-simple-duotone";
export const id="dl_67053b0aa725421f8e78";
export const url=new URL("../icons/fish-simple-duotone.svg?v=3dbc393b92c2e5f613e7300c496de2b794b942244af756b2a5701284a092930b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
