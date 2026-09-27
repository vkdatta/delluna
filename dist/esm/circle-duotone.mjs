export const name="circle-duotone";
export const id="dl_16d60ac860324b5bad3d";
export const url=new URL("../icons/circle-duotone.svg?v=68ed93d576aad806fa81cad3fda37fe2cb464ee08af1390eccdcbc067a736ac2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
