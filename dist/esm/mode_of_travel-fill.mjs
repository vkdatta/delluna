export const name="mode_of_travel-fill";
export const id="dl_05cad8b6b18fc74cd5bf";
export const url=new URL("../icons/mode_of_travel-fill.svg?v=9a63f8109da51a53fe1db0a680e849c0aead648d33d94eb4b072f5bb623b68ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
