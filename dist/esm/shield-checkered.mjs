export const name="shield-checkered";
export const id="dl_ce6a0cb83f414e2da1e0";
export const url=new URL("../icons/S/shield-checkered.svg?v=3d8b3b844d28a80edd5926054be05365489e4407e4bc956f353611c05febfeb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
