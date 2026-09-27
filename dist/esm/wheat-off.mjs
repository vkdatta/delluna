export const name="wheat-off";
export const id="dl_d76ff4ed5f584cbf86cf";
export const url=new URL("../icons/wheat-off.svg?v=855b00334c402452137675182e1db34721eb576a18cc72bcdea470a7b5062154",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
