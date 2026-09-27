export const name="rewind-bold";
export const id="dl_f5f676977bd5480093b1";
export const url=new URL("../icons/rewind-bold.svg?v=ef3826dc7351a512b108e692d69edf9df17fefd94263354d4761488172a72965",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
