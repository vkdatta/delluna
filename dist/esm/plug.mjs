export const name="plug";
export const id="dl_0536a540d30a48cb8400";
export const url=new URL("../icons/plug.svg?v=f0b3fb1840373e8255bb20f89d595299f53c7996871fa355076c8cdbc49582cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
