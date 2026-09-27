export const name="electric_meter";
export const id="dl_51c536e76c349f67bd4f";
export const url=new URL("../icons/electric_meter.svg?v=fed097b1d5a1a8c687eb2fbb091015457327631a7763de9e81ae940191d83ccd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
