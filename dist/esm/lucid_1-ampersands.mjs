export const name="lucid_1-ampersands";
export const id="dl_be004c3cac68420bac54";
export const url=new URL("../icons/lucid_1-ampersands.svg?v=1f95c4682482c8eb35d616227ff9051f1516dce7f0e805727ab25f4850791df4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
