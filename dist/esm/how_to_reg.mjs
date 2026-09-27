export const name="how_to_reg";
export const id="dl_2bb7c6d32ae179eff266";
export const url=new URL("../icons/how_to_reg.svg?v=a62dbf0df9960102e9758ce12677c9b6a14fa3d53fcdcddcc2c1586f0ec44788",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
