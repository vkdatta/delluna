export const name="potted-plant";
export const id="dl_71e4f1dee9864ee4be6a";
export const url=new URL("../icons/potted-plant.svg?v=9bebb4f7a16eb1e577b08c57975669498caf5e9037daf513018718644acad4f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
