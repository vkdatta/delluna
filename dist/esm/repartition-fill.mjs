export const name="repartition-fill";
export const id="dl_3da2fac19a6925797085";
export const url=new URL("../icons/repartition-fill.svg?v=d50d0e8cd0c399413ceefb5d8344edecf4730383077c2ab704751bd0e69fa700",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
