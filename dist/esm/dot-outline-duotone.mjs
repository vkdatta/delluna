export const name="dot-outline-duotone";
export const id="dl_fc29e9556bdf425fbed6";
export const url=new URL("../icons/dot-outline-duotone.svg?v=34ff578c5c2a0f1710e281795143bfd39abface74224edce08ed3c78f54ffc44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
