export const name="check-square-duotone";
export const id="dl_d094670aaed9443ca365";
export const url=new URL("../icons/check-square-duotone.svg?v=6e67626b58c5e3be3aa207fb0735c87ba0387b2b3e17e0dd8c0b21af612947bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
