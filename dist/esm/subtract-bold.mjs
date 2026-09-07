export const name="subtract-bold";
export const id="dl_e4f236986d3b435db63f";
export const url=new URL("../icons/S/subtract-bold.svg?v=206b89d297f04b2c2b476b62c1433bb22c5b7b2b2b6a1d5c734f8c1eaa9ddf18",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
