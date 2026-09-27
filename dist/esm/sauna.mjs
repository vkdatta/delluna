export const name="sauna";
export const id="dl_189515b5f18c043546fe";
export const url=new URL("../icons/sauna.svg?v=0249247122a52cac912e626180cce0b521d37b46b38c77fd9808ac9a98bf5676",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
