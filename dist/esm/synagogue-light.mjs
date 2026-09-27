export const name="synagogue-light";
export const id="dl_8d873d4070cddd72b8b7";
export const url=new URL("../icons/synagogue-light.svg?v=bf5503f9f2aae90949d2ceacedefa766e791df0237138ed048d68904e9b9e824",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
