export const name="arrows-out-simple-fill";
export const id="dl_80809fe463df45c0806d";
export const url=new URL("../icons/arrows-out-simple-fill.svg?v=d0663413c03becadeada907a74166b00688631834cf43ea798a203a262e91125",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
