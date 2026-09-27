export const name="shape_line";
export const id="dl_92127680b974e236015c";
export const url=new URL("../icons/shape_line.svg?v=899f61ed7596f8f2f1f92f83382aa7096d82cffe7a6afa1862e3aeecc4bf93af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
