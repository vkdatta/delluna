export const name="barbell-fill";
export const id="dl_1055e1a261dc4756bbb2";
export const url=new URL("../icons/barbell-fill.svg?v=3b512c2ba36fda20f0eb05fcb0e16374b6874a201bcea25ec83d8b272dda5349",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
