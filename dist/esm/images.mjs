export const name="images";
export const id="dl_db34d54c84d44760b652";
export const url=new URL("../icons/images.svg?v=94603f6ae7dfc46cdcf479401eae5f129f9bcea81d7211aa02cae24f5c31c4d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
