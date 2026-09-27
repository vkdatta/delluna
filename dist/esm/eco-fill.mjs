export const name="eco-fill";
export const id="dl_74cda8bd14b5e5fc7544";
export const url=new URL("../icons/eco-fill.svg?v=45d0be2fc6113ca866664be415e579605a918b4e86dff4e05e4d142e1020a105",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
