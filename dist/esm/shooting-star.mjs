export const name="shooting-star";
export const id="dl_43831c61079f44f1b510";
export const url=new URL("../icons/S/shooting-star.svg?v=e18176c798a5f068fc1289d48670b7412290be39adeb6c1a1d3f16654713a3c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
