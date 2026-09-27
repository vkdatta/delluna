export const name="arrow_back_ios_new-fill";
export const id="dl_f271a9fc2468f9bf5cd9";
export const url=new URL("../icons/arrow_back_ios_new-fill.svg?v=7e0d4ca977033a90e834001af48174a8ccb43d57ae439a5e0540da77f44c7ba3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
