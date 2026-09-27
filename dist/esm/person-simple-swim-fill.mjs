export const name="person-simple-swim-fill";
export const id="dl_96e709f0532c440ca3f4";
export const url=new URL("../icons/person-simple-swim-fill.svg?v=7695b0d8b22ac7907bf97ea096a83b0e6815232ed95efcff1338478d4524a95c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
