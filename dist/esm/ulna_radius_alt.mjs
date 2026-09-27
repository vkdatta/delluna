export const name="ulna_radius_alt";
export const id="dl_9a20f6d4d542d543d7fb";
export const url=new URL("../icons/ulna_radius_alt.svg?v=def951b0996f033f163f68427ac75947d320610a427c53a227d9c2699b9e51aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
