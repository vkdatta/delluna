export const name="arrow-circle-up-bold";
export const id="dl_92fe60d1d1ea4fc1a380";
export const url=new URL("../icons/arrow-circle-up-bold.svg?v=477d86f1a98efb6785d0fa3bdd3f649aa88f1fa2b0220e78ca179fa219dbb331",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
