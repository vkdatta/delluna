export const name="building-apartment-bold";
export const id="dl_128584040c2140c49013";
export const url=new URL("../icons/building-apartment-bold.svg?v=f7e0876f534b48fb58d923cdc95926dacdb7dea6224169127ece1b11f854ae9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
