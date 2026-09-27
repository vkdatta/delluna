export const name="lightbulb-bold";
export const id="dl_bc70b35466964fbf89d3";
export const url=new URL("../icons/lightbulb-bold.svg?v=6c7fb553227ad02123966c8239cbf1452c63577a46187afe3e2d0a7307093c99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
