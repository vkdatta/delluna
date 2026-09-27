export const name="lucid_1-chef-hat";
export const id="dl_eb6595a6b8a64e74a9f5";
export const url=new URL("../icons/lucid_1-chef-hat.svg?v=55f5f4ed100360ee3aa468a51b3990a5433fd0dd5c32e3212cedf981702030ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
