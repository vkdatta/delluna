export const name="car-simple";
export const id="dl_261453a4f2f74d1f8410";
export const url=new URL("../icons/car-simple.svg?v=bfa5d3dba61fb4fe501c2a1e1b5741ffcb9024d8054c2c1ae9c6b59d8b93b64a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
