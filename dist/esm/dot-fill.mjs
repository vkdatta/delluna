export const name="dot-fill";
export const id="dl_dd1908bd45d448f2bce6";
export const url=new URL("../icons/dot-fill.svg?v=d6c162bbefc89506df6e82b99df575e3e88b925cc38d09560f53a102ecb5e4be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
