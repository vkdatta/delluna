export const name="crane-tower";
export const id="dl_d3b83c4923434910a4ec";
export const url=new URL("../icons/crane-tower.svg?v=4921d380417f9bbc3e02f1116ffcb0047c8315296b65a47b6c104eab50e7530e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
