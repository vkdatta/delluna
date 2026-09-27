export const name="kid_star";
export const id="dl_a41af784fd3f1d8592b6";
export const url=new URL("../icons/kid_star.svg?v=a8484066a95511b87554d3aef414c39c1a7ba4e459a9f60a5cea455a3b482e91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
