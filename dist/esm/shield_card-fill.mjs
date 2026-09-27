export const name="shield_card-fill";
export const id="dl_b7e4ad86cee86b321837";
export const url=new URL("../icons/shield_card-fill.svg?v=03610523be54ca79b5746c416e0174faccfde04a8f4e30cce8fe6890cf46fe41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
