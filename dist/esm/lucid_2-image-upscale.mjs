export const name="lucid_2-image-upscale";
export const id="dl_9b1d652745de496eb1a6";
export const url=new URL("../icons/lucid_2-image-upscale.svg?v=357f6455b391bad4e907eefb405d418abca9c3807a3d7029f6477042708d87db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
