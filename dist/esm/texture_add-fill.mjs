export const name="texture_add-fill";
export const id="dl_5b61a79198bf7a56c2bc";
export const url=new URL("../icons/texture_add-fill.svg?v=90b11ca543af5d8ade29ca666f25edaa353ecdbd970d9d6d1be3baa036be94e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
