export const name="antigravity-fill";
export const id="dl_4b277fde1d438b4743db";
export const url=new URL("../icons/antigravity-fill.svg?v=45a9249d06c0d8cdbbfe02e527ca576cdc31c7b7694438b14852480358981277",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
