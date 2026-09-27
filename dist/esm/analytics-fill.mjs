export const name="analytics-fill";
export const id="dl_2ea509189ea445be3d09";
export const url=new URL("../icons/analytics-fill.svg?v=2d71e710484682a2a990f558b03cbb642fd283bce1f95f3acd5b772dd9bf0040",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
