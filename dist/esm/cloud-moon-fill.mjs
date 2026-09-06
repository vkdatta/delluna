export const name="cloud-moon-fill";
export const id="dl_1d2a5869a8974e119e39";
export const url=new URL("../icons/cloud-moon-fill.svg?v=c7b5e31066fe59cb6322ea6772ad17876c0b754ffc3b194542f65434db458ece",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
