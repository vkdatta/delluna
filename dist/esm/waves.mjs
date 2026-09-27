export const name="waves";
export const id="dl_6cf9e64de672ac53bee2";
export const url=new URL("../icons/waves.svg?v=de913b2bff765875493325023e29d261ecd5b0c1de81b797ebcdf7b8c09c66e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
