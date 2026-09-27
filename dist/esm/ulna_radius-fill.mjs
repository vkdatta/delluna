export const name="ulna_radius-fill";
export const id="dl_b9289057d178546a4df3";
export const url=new URL("../icons/ulna_radius-fill.svg?v=ecc5c29be32ef5eadb3597f7878ea02ccbd4d9da722dbffb7e4b7f0377790d8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
