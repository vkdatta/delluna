export const name="images";
export const id="dl_db34d54c84d44760b652";
export const url=new URL("../icons/images.svg?v=192e01c3c0703c8be0d3beb1e26ebde231a4424078902b604fed2fc2b1f993d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
