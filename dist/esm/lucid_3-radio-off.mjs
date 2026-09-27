export const name="lucid_3-radio-off";
export const id="dl_51f5fef8b0d34411b026";
export const url=new URL("../icons/lucid_3-radio-off.svg?v=f5e2c650d3068684b7e765448e125ef423e05c74a409b7ff0dfe49ff72210873",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
