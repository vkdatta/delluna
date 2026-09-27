export const name="car-profile";
export const id="dl_6eedd93b29dc48c2918e";
export const url=new URL("../icons/car-profile.svg?v=72fdd439ccca5cedd2448f84bab8cdbff46fe66bf3d06b777d86a559af73d9bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
