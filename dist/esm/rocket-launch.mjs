export const name="rocket-launch";
export const id="dl_5315ff9fc9fc4c5292a1";
export const url=new URL("../icons/rocket-launch.svg?v=a32fa75ec97c1b17787ac90d98edda105eadb3562cb51dea84c37b369812e15f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
