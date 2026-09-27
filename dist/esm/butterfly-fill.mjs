export const name="butterfly-fill";
export const id="dl_ce2c7547c2334274bbcc";
export const url=new URL("../icons/butterfly-fill.svg?v=1ae6b8f539091f361a4398beb134f4eddac8ed7a53926f1cd186b9e23faec6d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
