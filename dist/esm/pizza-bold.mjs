export const name="pizza-bold";
export const id="dl_ebc8dcdc1b6c4bc2a2af";
export const url=new URL("../icons/pizza-bold.svg?v=400c9a65ac9f2cfbc55ff5f98cff5229785e14366cfa356ba8b439f0db4cc0b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
