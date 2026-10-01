export const name="money_off-fill";
export const id="dl_67183f044b0038af1205";
export const url=new URL("../icons/money_off-fill.svg?v=57b6fddf7bf9ae2054a8ce8ce3142c4b539bd8c5b2ea6c940715459e1ff8a204",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
