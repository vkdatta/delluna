export const name="standard-definition-duotone";
export const id="dl_6087a24ed362432d8f1b";
export const url=new URL("../icons/S/standard-definition-duotone.svg?v=7207fb531b25df7812ee2ea4523ed9a1dad01c0c44673619cdc2292ce93649b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
