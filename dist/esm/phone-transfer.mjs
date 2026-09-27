export const name="phone-transfer";
export const id="dl_85a7f2f878d34e2f8bfc";
export const url=new URL("../icons/phone-transfer.svg?v=be2aa68206324f18691103808c96353e2ed7219f01e1a7e191ac69fa4a024b36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
