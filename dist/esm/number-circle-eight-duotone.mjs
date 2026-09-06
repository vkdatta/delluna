export const name="number-circle-eight-duotone";
export const id="dl_a2b333ace9024b7c802b";
export const url=new URL("../icons/number-circle-eight-duotone.svg?v=f48cdc976c509cf5956ac31d3d338b50aafb3091b1160e442446fa4b176b03cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
