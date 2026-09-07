export const name="shuffle-bold";
export const id="dl_9532232e1a134734ae06";
export const url=new URL("../icons/S/shuffle-bold.svg?v=6a5f1c5f067da9a20cac8872c921d61d9c93d571493677c95a159d8f1f952eaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
