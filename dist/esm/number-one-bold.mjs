export const name="number-one-bold";
export const id="dl_fbddd952e60c4dcb91f1";
export const url=new URL("../icons/number-one-bold.svg?v=5ea1e7e020cdd37cdb8ca0890e0ad898b1fe15138c3fbbab027d400926d39fd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
