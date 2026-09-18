export const name="manufacturing-fill";
export const id="dl_e3620882d88f49e895af";
export const url=new URL("../icons/manufacturing-fill.svg?v=c6867e826895a4c222179ab32d84b59943ff19bd3588ab4e51416761318330f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
