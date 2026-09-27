export const name="plant-duotone";
export const id="dl_98b0e42b7d7f4527b7aa";
export const url=new URL("../icons/plant-duotone.svg?v=1275f1c48f6b830af75474e88d467198ee2a62459b8e66ce3361586c6ad0b3c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
