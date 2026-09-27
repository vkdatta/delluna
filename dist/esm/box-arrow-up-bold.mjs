export const name="box-arrow-up-bold";
export const id="dl_ce3c7a76139f4b59818b";
export const url=new URL("../icons/box-arrow-up-bold.svg?v=f1a831258295912f973afa1cd9fdb972378601d42745b009789e821a1d84c279",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
