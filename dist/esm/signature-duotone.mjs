export const name="signature-duotone";
export const id="dl_09bd0fe59d22443ea25a";
export const url=new URL("../icons/S/signature-duotone.svg?v=9efc4aa07c7fd82de1cc53da781264802db09e31920938217c788c2768629dbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
