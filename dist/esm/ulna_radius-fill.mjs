export const name="ulna_radius-fill";
export const id="dl_57fbc35fa5004bc19728";
export const url=new URL("../icons/ulna_radius-fill.svg?v=aaeff1ee5a148119f443cb82d252a2bf55ca4efb2901dcb871f4b85a0ddbfb24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
