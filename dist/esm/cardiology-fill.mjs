export const name="cardiology-fill";
export const id="dl_835670a22698143f6760";
export const url=new URL("../icons/cardiology-fill.svg?v=10dce266f359e323eb762b3a890c441034557ec90f16fa4a4ac12439f4da9847",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
