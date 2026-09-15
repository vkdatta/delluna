export const name="fire_truck";
export const id="dl_61d6d40009b24eabbdf5";
export const url=new URL("../icons/F/fire_truck.svg?v=d17c24b76a3a34e7495f3d633b5635a3747bafbd1d27427bf90d9f17b6a61cc0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
