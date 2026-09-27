export const name="lyrics";
export const id="dl_c8e6202f70e199a70941";
export const url=new URL("../icons/lyrics.svg?v=11346109d03a2cad974b2b4c6317b0415c0b434a59111c692d1e067d179e020c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
