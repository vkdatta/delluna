export const name="waves";
export const id="dl_6eadad2aa7d942c7b889";
export const url=new URL("../icons/W/waves.svg?v=de913b2bff765875493325023e29d261ecd5b0c1de81b797ebcdf7b8c09c66e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
