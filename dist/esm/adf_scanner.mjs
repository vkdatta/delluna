export const name="adf_scanner";
export const id="dl_c6270ee182e4ec2de5ef";
export const url=new URL("../icons/adf_scanner.svg?v=0a0f9aef1dc81a45a3d1572b33968ae3cb679ac6192011f99199cc09bd9c1480",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
