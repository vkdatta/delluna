export const name="users-three";
export const id="dl_aa34b57cf74c36f4c63f";
export const url=new URL("../icons/users-three.svg?v=0e326e4ef7d1ae16f9988791f68fde7bae513bdc8c06db437cfd55bf13670bcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
