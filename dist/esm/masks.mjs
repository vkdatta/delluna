export const name="masks";
export const id="dl_c606cf9124d095af0ffb";
export const url=new URL("../icons/masks.svg?v=7496d2df85fd9b49f19b20e452d5a3829ec70ea58af0d66587aa744d62834062",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
